import { Injectable } from "@nestjs/common";
import { SelectQueryBuilder } from "typeorm";
import { Filter, Sort } from "../room/dto/room.dto";

@Injectable()
export class UtilityService {
  handlePagination <T> (
    query: SelectQueryBuilder<T>,
    page: number = 1,
    limit: number = 10
  ) : SelectQueryBuilder<T> {
    const offset = page * limit
    return query.skip(offset).take(limit);
  }

  handleSorting <T> (
    query: SelectQueryBuilder<T>,
    sorts: Sort[]
  ) : SelectQueryBuilder <T> {
    sorts.forEach((sort) => {
      query.addOrderBy(sort.field, sort.order);
    });
    return query;
  }

  handleFilter <T> (
    query: SelectQueryBuilder<T>,
    filters: Filter[]
  ) : SelectQueryBuilder<T> {
    filters.forEach((filter) => {
      console.log(filter.field)
      switch (filter.operator) {
        case 'equals':
          query.andWhere(`${filter.field} = :value`, { value: filter.value });
          break;
        case 'not':
          query.andWhere(`${filter.field} != :value`, { value: filter.value });
          break;
        case 'gt':
          query.andWhere(`${filter.field} > :value`, { value: filter.value });
          break;
        case 'gte':
          query.andWhere(`${filter.field} >= :value`, { value: filter.value });
          break;
        case 'lt':
          query.andWhere(`${filter.field} < :value`, { value: filter.value });
          break;
        case 'lte':
          query.andWhere(`${filter.field} <= :value`, { value: filter.value });
          break;
        case 'like':
          query.andWhere(`${filter.field} LIKE :value`, { value: `%${filter.value}%` });
          break;
        case 'in':
          query.andWhere(`${filter.field} IN (:...value)`, { value: filter.value });
          break;
        case 'notIn':
          query.andWhere(`${filter.field} NOT IN (:...value)`, { value: filter.value });
          break;
        case 'isNull':
          query.andWhere(`${filter.field} IS NULL`);
          break;
        case 'isNotNull':
          query.andWhere(`${filter.field} IS NOT NULL`);
          break;
        default:
          break;
      }
    });
    return query;
  }
}