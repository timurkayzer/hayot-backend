import { ApiProperty } from "@nestjs/swagger";
import { TranslatableStringDto } from "src/common/translatable.model";

export class CreateNewsDto {
    @ApiProperty()
    title: TranslatableStringDto;
    @ApiProperty()
    description: TranslatableStringDto;
    @ApiProperty()
    text: TranslatableStringDto;
    @ApiProperty()
    images: string[];
}
