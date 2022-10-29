import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { FileProperty } from "src/common/fileproperty.model";
import { TranslatableString } from "src/common/translatable.model";
import { FileModel } from "src/files/entities/file.entity";


export type MediaDocument = Media & Document;

class Website {
    @Prop()
    name: string;
    @Prop()
    link: string;
}

@Schema({
    timestamps: true
})
export class Media {
    @Prop({ type: Website })
    website: Website;
    @Prop()
    title: TranslatableString;
    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: 'FileModel'
    })
    img: FileModel;
    @Prop()
    color: string;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
