import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type FileModelDocument = FileModel & Document;

@Schema()
export class FileModel {
    @Prop()
    fileName: string;
}

export const FileModelSchema = SchemaFactory.createForClass(FileModel);