import { CourseDocument } from '@libs /db/models/course.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto, UpdateCourseDto } from '../courses/courses.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel('Course') private readonly courseMode: Model<CourseDocument>,
  ) {}

  async findAll() {
    const rows = await this.courseMode.find();
    const total = await this.courseMode.countDocuments();
    return {
      rows,
      total,
    };
  }

  async create(body: CreateCourseDto) {
    return await this.courseMode.create(body);
  }

  async findById(id: string) {
    return await this.courseMode.findById(id);
  }

  async update(id: string, updateUserDto: UpdateCourseDto) {
    await this.courseMode.findByIdAndUpdate(id, updateUserDto);
    return null;
  }

  async remove(id: string) {
    await this.courseMode.findByIdAndDelete(id);
    return null;
  }
}
