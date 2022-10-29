import { TranslatableStringDto } from "src/common/translatable.model";

export class CreateNewsDto {
    title: TranslatableStringDto;
    description: TranslatableStringDto;
    text: TranslatableStringDto;
    images: string[];
}
