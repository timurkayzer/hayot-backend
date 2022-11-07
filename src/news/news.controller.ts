import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { News } from './entities/news.entity';

@ApiTags('Новости')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) { }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: 'Создание новости' })
  @ApiResponse({ type: [News] })
  @Post()
  async create(@Body() createNewsDto: CreateNewsDto) {
    return await this.newsService.create(createNewsDto);
  }

  @Get()
  async findAll() {
    return await this.newsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.newsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return await this.newsService.update(id, updateNewsDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.newsService.remove(id);
  }
}
