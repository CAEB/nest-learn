import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EpisodeDocument = Episode & Document;

@Schema({
  timestamps: true,
})
export class Episode extends Document {
  @Prop()
  name: string;

  @Prop()
  file: string;
}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);
