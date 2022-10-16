import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { v4 } from 'uuid';

@Injectable()
export class FilesService {
    async uploadFile(file: Express.Multer.File): Promise<string> {
        const id = v4();
        const fileName = `${id}${path.extname(file.originalname)}`;
        try {
            await fs.writeFile(path.relative('', `uploads/${fileName}`), file.buffer);
            return fileName;
        }
        catch (e) {
            throw new Error('Error while uploading file, ' + e?.toString());
        }

    }

    async insertFile(fileName: string) {

    }

    async deleteFile(file: string): Promise<boolean> {
        try {
            await fs.unlink(path.relative('', `uploads/${file}`));
            return true;
        }
        catch (e) {
            throw new Error('Error while deleting file, ' + e?.toString());
        }

    }
}
