import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from 'libs/interceptors/transform.interceptor';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [UsersModule, CoursesModule, EpisodesModule],
  controllers: [AdminController],
  providers: [
    AdminService,
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
  ],
})
export class AdminModule {}
