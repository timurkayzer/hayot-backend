import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { FileProperty } from "src/common/fileproperty.model";
import { TranslatableString } from "src/common/translatable.model";


export type MediaDocument = Media & Document;

class Website {
    @Prop()
    name: string;
    @Prop()
    link: string;
}

@Schema()
export class Media {
    @Prop({ type: Website })
    website: Website;
    @Prop()
    title: TranslatableString;
    @Prop()
    img: FileProperty;
    @Prop()
    color: string;
    @Prop()
    createdAt: Date;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
