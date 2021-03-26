import { Episode } from '@libs /db/models/episode.model';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty({ description: '课程名字', example: 'course1' })
  name: string;

  @ApiProperty({ description: '课程封面', example: 'cover1' })
  cover: string;

  @ApiProperty({ description: '课程课时', example: [] })
  episodes: Episode[];
}

export class UpdateCourseDto extends CreateCourseDto {}
