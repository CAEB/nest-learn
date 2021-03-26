import { DbModule } from '@libs /db';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [DbModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
