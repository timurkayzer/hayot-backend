import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Pet } from './entities/pet.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@ApiTags('Питомцы')
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) { }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({ type: Pet })
  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    return await this.petsService.create(createPetDto);
  }

  @Get()
  async findAll() {
    return await this.petsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.petsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return await this.petsService.update(id, updatePetDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.petsService.remove(id);
  }
}
