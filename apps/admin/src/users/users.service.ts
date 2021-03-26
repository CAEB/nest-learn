import { UserDocument } from '@libs /db/models/user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userMode: Model<UserDocument>,
  ) {}

  async findAll() {
    const rows = await this.userMode.find();
    const total = await this.userMode.countDocuments();
    return {
      rows,
      total,
    };
  }

  async create(body: CreateUserDto) {
    return await this.userMode.create(body);
  }

  async findById(id: string) {
    return await this.userMode.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userMode.findByIdAndUpdate(id, updateUserDto);
    return null;
  }

  async remove(id: string) {
    await this.userMode.findByIdAndDelete(id);
    return null;
  }
}
