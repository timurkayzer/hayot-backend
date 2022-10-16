import { Prop } from "@nestjs/mongoose";

export class TranslatableString {
    @Prop()
    ru: string;
    @Prop()
    uz: string;
    @Prop()
    en: string;
}

export class TranslatableStringDto {
    ru: string;
    uz: string;
    en: string;
}