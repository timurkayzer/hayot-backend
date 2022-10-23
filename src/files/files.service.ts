import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as fs from 'fs/promises';
import { Model } from 'mongoose';
import * as path from 'path';
import { v4 } from 'uuid';
import { FileModel, FileModelDocument } from './entities/file.entity';
import { path as rootPath } from 'app-root-path';
import * as sharp from 'sharp';

@Injectable()
export class FilesService {

    constructor(
        @InjectModel(FileModel.name) private fileModel: Model<FileModelDocument>
    ) { }

    async uploadFile(file: Express.Multer.File): Promise<string> {
        const id = v4();
        const fileName = `${id}${path.extname(file.originalname)}`;
        try {
            await fs.writeFile(`${rootPath}/uploads/${fileName}`, file.buffer);
            return fileName;
        }
        catch (e) {
            throw new Error('Error while uploading file, ' + e?.toString());
        }
    }

    async insertFile(file: Express.Multer.File) {
        const fileName = await this.uploadFile(file);

        return await this.fileModel.create({
            fileName
        });
    }

    async deleteFile(fileId: string): Promise<boolean> {
        try {
            const file = await this.fileModel.findById(fileId);
            await fs.unlink(`${rootPath}/uploads/${file.fileName}`);
            return await this.fileModel.findByIdAndDelete(fileId);;
        }
        catch (e) {
            throw new Error('Error while deleting file, ' + e?.toString());
        }

    }

    convertToWebP(file: Buffer): Promise<Buffer> {
        return sharp(file)
            .webp()
            .toBuffer();
    }
}
