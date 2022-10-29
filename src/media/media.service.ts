import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media, MediaDocument } from './entities/media.entity';

@Injectable()
export class MediaService {

  constructor(
    @InjectModel(Media.name) private mediaModel: Model<MediaDocument>
  ) {

  }

  create(createMediaDto: CreateMediaDto) {
    return this.mediaModel.create(createMediaDto);
  }

  findAll() {
    return this.mediaModel.find().populate('img').lean();
  }

  findOne(id: string) {
    return this.mediaModel.findById(id).populate('img').lean();
  }

  update(id: string, updateMediaDto: UpdateMediaDto) {
    return this.mediaModel.findByIdAndUpdate(id, updateMediaDto);
  }

  remove(id: string) {
    return this.mediaModel.findByIdAndDelete(id);
  }
}
