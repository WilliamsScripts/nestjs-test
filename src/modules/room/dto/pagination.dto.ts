import { IsInt, IsOptional, Min } from 'class-validator';

export class PaginationDto {
  @IsInt()
  @Min(0)
  @IsOptional()
  page: number;

  @IsInt()
  @Min(1)
  @IsOptional()
  limit: number;
}
