import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('用户')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @ApiOperation({ summary: '获取用户列表' })
  async index() {
    return this.userService.findAll();
  }

  @Post()
  @ApiOperation({ summary: '创建用户' })
  async create(@Body() createUserdto: CreateUserDto) {
    return await this.userService.create(createUserdto);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取用户详情' })
  async find(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Post('update/:id')
  @ApiOperation({ summary: '修改用户' })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Get('remove/:id')
  @ApiOperation({ summary: '删除用户' })
  async remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
