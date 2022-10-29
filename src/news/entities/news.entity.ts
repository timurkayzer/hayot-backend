import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { TranslatableString } from "src/common/translatable.model";
import { FileModel } from "src/files/entities/file.entity";

export type NewsDocument = News & Document;

@Schema({
    timestamps: true
})
export class News {
    @Prop({ type: TranslatableString })
    title: TranslatableString;
    @Prop({ type: TranslatableString })
    description: TranslatableString;
    @Prop({ type: TranslatableString })
    text: TranslatableString;
    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: 'FileModel'
    })
    images: FileModel[];
}

export const NewsSchema = SchemaFactory.createForClass(News);