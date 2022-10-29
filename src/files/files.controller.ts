import { Controller, Delete, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { FilesService } from './files.service';

@ApiTags('Файлы')
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) { }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile(new ParseFilePipe({
    validators: [
      // new MaxFileSizeValidator({ maxSize: 1000 }),
    ],
  })) file: Express.Multer.File) {
    if (file.mimetype.includes('image')) {
      file.buffer = await this.filesService.convertToWebP(file.buffer);
      file.originalname = `${file.originalname.split('.')[0]}.webp`;
    }
    return await this.filesService.insertFile(file);
  }

  @Delete('delete/:id')
  @UseInterceptors(FileInterceptor('file'))
  async deleteFile(@Param('id') id: string) {
    return await this.filesService.deleteFile(id);
  }
}
