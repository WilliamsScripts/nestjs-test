import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
const rooms_data = require('../data/rooms');
import { Rooms } from "../modules/room/entities/room.entity";

export default class CreateRooms implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    return await dataSource
      .createQueryBuilder()
      .insert()
      .into(Rooms)
      .values(rooms_data)
      .execute();
  }
}
