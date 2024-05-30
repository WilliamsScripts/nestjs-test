import { EntityManager, Repository } from 'typeorm';
import { Rooms } from '../entities/room.entity';
import { Injectable } from '@nestjs/common';
import { UtilityService } from 'src/modules/utility/utility.service';
import { Filter, Sort } from '../dto/room.dto';

@Injectable()
export class RoomRepository extends Repository<Rooms> {
  constructor(
    private readonly utilityService: UtilityService,
    private readonly entityManager: EntityManager,
  ) {
   super(Rooms, entityManager)
  }

  async fetchAll (
    page: number,
    limit: number,
    filters: Filter[],
    sorts: Sort[]
  ) {
    let query = this.entityManager.createQueryBuilder(Rooms, 'rooms');

    query = this.utilityService.handleFilter(query, filters);
    query = this.utilityService.handlePagination(query, page, limit);
    query = this.utilityService.handleSorting(query, sorts);

    return await query.getMany();
  }
}