import { Global, Module } from "@nestjs/common";
import { UtilityService } from "./utility.service";


@Global()
@Module({
  providers: [UtilityService],
  imports: [],
  exports: [UtilityService]
})
export class UtilityModule{};