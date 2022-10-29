
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { TranslatableString } from 'src/common/translatable.model';
import { FileModel } from 'src/files/entities/file.entity';

export enum GenderEnum {
    male = "m",
    female = "f"
}

export type PetDocument = Pet & Document;

@Schema({
    timestamps: true
})
export class Pet {
    @Prop()
    name: TranslatableString;

    @Prop()
    description: TranslatableString;

    @Prop()
    excerpt: TranslatableString;

    @Prop()
    adopted: boolean;

    @Prop()
    castrated: boolean;

    @Prop({
        enum: GenderEnum
    })
    gender: GenderEnum;

    @Prop()
    size: string;

    @Prop()
    age: number;

    @Prop()
    weigth: number;

    @Prop()
    height: number;

    @Prop({
        type: Array<MongooseSchema.Types.ObjectId>,
        ref: 'FileModel'
    })
    files: FileModel[];
}

export const PetSchema = SchemaFactory.createForClass(Pet);