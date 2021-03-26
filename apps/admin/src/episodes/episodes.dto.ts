import { ApiProperty } from '@nestjs/swagger';

export class CreateEpisodeDto {
  @ApiProperty({ description: '课时名字', example: 'name' })
  name: string;

  @ApiProperty({ description: '课时资源', example: 'file' })
  file: string;
}

console.log(123);

export class UpdateEpisodeDto extends CreateEpisodeDto {}
