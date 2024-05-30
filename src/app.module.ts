import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { RoomModule } from './modules/room/room.module';
import { UtilityModule } from './modules/utility/utility.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.local'],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: parseInt(config.get('DB_PORT'), 10),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        // synchronize: true,
        logging: true,
        seeds: ["src/seeds/**/*{.ts}"]
      }),
    }),
    RoomModule,
    UtilityModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}