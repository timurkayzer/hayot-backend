import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News, NewsDocument } from './entities/news.entity';

@Injectable()
export class NewsService {

  constructor(
    @InjectModel(News.name) private newsModel: Model<NewsDocument>
  ) { }

  create(createNewsDto: CreateNewsDto) {
    return this.newsModel.create(CreateNewsDto);
  }

  findAll() {
    return this.newsModel.find().populate('images').lean();
  }

  findOne(id: string) {
    return this.newsModel.findById(id).populate('images').lean();
  }

  update(id: string, updateNewsDto: UpdateNewsDto) {
    return this.newsModel.findByIdAndUpdate(id, updateNewsDto);
  }

  remove(id: string) {
    return this.newsModel.findByIdAndDelete(id);
  }
}
