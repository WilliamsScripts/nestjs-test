import { Injectable } from '@nestjs/common';
import { RoomRepository } from '../repositories/room.repository';
import { Rooms } from '../entities/room.entity';
import { Filter, Sort } from '../dto/room.dto';


@Injectable()
export class RoomService {
  constructor(private readonly roomRepository: RoomRepository) {} 

  async getRooms (
    page: number,
    limit: number,
    filters: Filter[],
    sorts: Sort[]
  ) : Promise<Rooms[]> {
    return await this.roomRepository.fetchAll(
      page,
      limit,
      filters,
      sorts
    );
  }
}