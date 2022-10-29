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

  async create(createNewsDto: CreateNewsDto) {
    return this.newsModel.create(CreateNewsDto);
  }

  async findAll() {
    return this.newsModel.find().lean();
  }

  async findOne(id: string) {
    return this.newsModel.findById(id);
  }

  async update(id: string, updateNewsDto: UpdateNewsDto) {
    return this.newsModel.findByIdAndUpdate(id, updateNewsDto);
  }

  async remove(id: string) {
    return this.newsModel.findByIdAndDelete(id);
  }
}
