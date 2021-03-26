import { EpisodeDocument } from '@libs /db/models/episode.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEpisodeDto, UpdateEpisodeDto } from './episodes.dto';

@Injectable()
export class EpisodesService {
  constructor(
    @InjectModel('Episode')
    private readonly episodeMode: Model<EpisodeDocument>,
  ) {}

  async findAll() {
    const rows = await this.episodeMode.find();
    const total = await this.episodeMode.countDocuments();
    return {
      rows,
      total,
    };
  }

  async create(body: CreateEpisodeDto) {
    return await this.episodeMode.create(body);
  }

  async findById(id: string) {
    return await this.episodeMode.findById(id);
  }

  async update(id: string, updateUserDto: UpdateEpisodeDto) {
    await this.episodeMode.findByIdAndUpdate(id, updateUserDto);
    return null;
  }

  async remove(id: string) {
    await this.episodeMode.findByIdAndDelete(id);
    return null;
  }
}
