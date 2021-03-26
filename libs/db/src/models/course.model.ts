import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Episode } from './episode.model';

export type CourseDocument = Course & Document;

@Schema({
  timestamps: true,
})
export class Course extends Document {
  @Prop()
  name: string;

  @Prop()
  cover: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Episode' }] })
  episodes: Episode[];
}

export const CourseSchema = SchemaFactory.createForClass(Course);
