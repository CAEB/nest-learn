import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '用户名', example: 'user1' })
  username: string;
  @ApiProperty({ description: '密码', example: 'pass1' })
  password: string;
}

export class UpdateUserDto extends CreateUserDto {}
