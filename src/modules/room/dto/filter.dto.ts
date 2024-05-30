import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class FilterDto {
  @IsString()
  @IsNotEmpty()
  field: string;

  @IsOptional()
  value: any;

  @IsString()
  @IsNotEmpty()
  operator: string;
}
