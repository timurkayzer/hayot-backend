import { Prop } from "@nestjs/mongoose";

export class FileProperty {
    @Prop()
    name: string;
    @Prop()
    path: string;
}

export class FilePropertyDto {

}