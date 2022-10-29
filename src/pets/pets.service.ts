import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet, PetDocument } from './entities/pet.entity';

@Injectable()
export class PetsService {

  constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) { }

  create(createPetDto: CreatePetDto) {
    return this.petModel.create(createPetDto);
  }

  findAll() {
    return this.petModel.find().lean();
  }

  findOne(id: string) {
    return this.petModel.findById(id);
  }

  update(id: string, updatePetDto: UpdatePetDto) {
    return this.petModel.findByIdAndUpdate(id, updatePetDto);
  }

  remove(id: string) {
    return this.petModel.findByIdAndDelete(id);
  }
}
