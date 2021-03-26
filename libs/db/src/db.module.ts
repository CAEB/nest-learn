import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbService } from './db.service';
import { Course, CourseSchema } from './models/course.model';
import { Episode, EpisodeSchema } from './models/episode.model';
import { User, UserSchema } from './models/user.model';

const models = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
  { name: Course.name, schema: CourseSchema },
  { name: Episode.name, schema: EpisodeSchema },
]);

@Global()
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-learn', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
