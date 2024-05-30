import { IsString, IsNotEmpty } from 'class-validator';

export class SortDto {
  @IsString()
  @IsNotEmpty()
  field: string;

  @IsString()
  @IsNotEmpty()
  order: 'ASC' | 'DESC';
}