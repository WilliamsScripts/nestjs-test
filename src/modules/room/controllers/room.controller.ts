import { Controller, Get, Query } from "@nestjs/common";
import { RoomService } from "../services/room.service";
import { PaginationDto } from "../dto/pagination.dto";
import { SortDto } from "../dto/sort.dto";
import { FilterDto } from "../dto/filter.dto";

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}
  
  @Get()
  getRoom(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('filters') filters: string,
    @Query('sort') sorts: string
  ) {
    const filterObjects: FilterDto[] = filters ? JSON.parse(filters) : [];
    const sortObjects: SortDto[] = sorts ? JSON.parse(sorts) : [];
    return this.roomService.getRooms(page, limit, filterObjects, sortObjects);
  }
}