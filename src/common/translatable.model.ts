import { Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class TranslatableString {
    @Prop()
    ru: string;
    @Prop()
    uz: string;
    @Prop()
    en: string;
}

export class TranslatableStringDto {
    @ApiProperty()
    ru: string;
    @ApiProperty()
    uz: string;
    @ApiProperty()
    en: string;
}