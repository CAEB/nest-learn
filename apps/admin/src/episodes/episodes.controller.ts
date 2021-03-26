import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateEpisodeDto, UpdateEpisodeDto } from './episodes.dto';
import { EpisodesService } from './episodes.service';

@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
  constructor(private readonly episodeservice: EpisodesService) {}

  @Get()
  @ApiOperation({ summary: '获取课时列表' })
  async index() {
    return this.episodeservice.findAll();
  }

  @Post()
  @ApiOperation({ summary: '创建课时' })
  async create(@Body() createEpisodedto: CreateEpisodeDto) {
    return await this.episodeservice.create(createEpisodedto);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取课时详情' })
  async find(@Param('id') id: string) {
    return this.episodeservice.findById(id);
  }

  @Post('update/:id')
  @ApiOperation({ summary: '修改课时' })
  async update(
    @Param('id') id: string,
    @Body() updateEpisodeDto: UpdateEpisodeDto,
  ) {
    return this.episodeservice.update(id, updateEpisodeDto);
  }

  @Get('remove/:id')
  @ApiOperation({ summary: '删除课时' })
  async remove(@Param('id') id: string) {
    return this.episodeservice.remove(id);
  }
}
