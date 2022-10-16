import { Controller, Delete, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';

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
    console.log(file);
    await this.filesService.uploadFile(file);
  }

  @Delete('delete/:id')
  @UseInterceptors(FileInterceptor('file'))
  async deleteFile(@Param('id') id: string) {
    console.log(id);
    await this.filesService.deleteFile(id);
  }
}
