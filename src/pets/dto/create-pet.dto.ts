import { TranslatableStringDto } from "src/common/translatable.model";
import { GenderEnum } from "../entities/pet.entity";

export class CreatePetDto {
    name: TranslatableStringDto;
    description: TranslatableStringDto;
    excerpt: TranslatableStringDto;
    adopted: boolean;
    castrated: boolean;
    gender: GenderEnum;
    size: string;
    age: number;
    weigth: number;
    height: number;
    files: string[];
}
