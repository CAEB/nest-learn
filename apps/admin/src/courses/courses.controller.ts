import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCourseDto, UpdateCourseDto } from './courses.dto';
import { CoursesService } from './courses.service';

@Controller('courses')
@ApiTags('课程')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  @ApiOperation({ summary: '获取课程列表' })
  async index() {
    return this.courseService.findAll();
  }

  @Post()
  @ApiOperation({ summary: '创建课程' })
  async create(@Body() createCoursedto: CreateCourseDto) {
    return await this.courseService.create(createCoursedto);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取课程详情' })
  async find(@Param('id') id: string) {
    return this.courseService.findById(id);
  }

  @Post('update/:id')
  @ApiOperation({ summary: '修改课程' })
  async update(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.courseService.update(id, updateCourseDto);
  }

  @Get('remove/:id')
  @ApiOperation({ summary: '删除课程' })
  async remove(@Param('id') id: string) {
    return this.courseService.remove(id);
  }
}
