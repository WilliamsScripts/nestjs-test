import { Module } from "@nestjs/common";
import { RoomController } from "./controllers/room.controller";
import { RoomService } from "./services/room.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Rooms } from "./entities/room.entity";
import { RoomRepository } from "./repositories/room.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Rooms])],
  controllers: [RoomController],
  providers: [RoomService, RoomRepository],
})

export class RoomModule {}