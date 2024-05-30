import { join } from "path";

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
  type: "postgres",
  synchronize: true,
  seeds: ['src/seeds/**/*{.ts,.js}'],
  entities: [join(process.cwd(), 'dist/**/*.entity.js')]
}