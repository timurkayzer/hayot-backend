import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('Медиа')
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createMediaDto: CreateMediaDto) {
    return await this.mediaService.create(createMediaDto);
  }

  @Get()
  async findAll() {
    return await this.mediaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.mediaService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) {
    return await this.mediaService.update(id, updateMediaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.mediaService.remove(id);
  }
}
