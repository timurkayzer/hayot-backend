import { TranslatableStringDto } from "src/common/translatable.model";

export class CreateMediaDto {
    website: WebsiteDto;
    title: TranslatableStringDto;
    img: string;
    color: string;
    createdAt: Date;
}

export class WebsiteDto {
    name: string;
    link: string;
}