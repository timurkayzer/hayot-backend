import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModel, FileModelSchema } from './entities/file.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FileModel.name,
        schema: FileModelSchema,
        collection: 'File'
      }
    ]),
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: '/static/'
    })
  ],
  controllers: [FilesController],
  providers: [FilesService]
})
export class FilesModule { }
