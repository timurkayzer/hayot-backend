import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { MediaModule } from './media/media.module';
import { NewsModule } from './news/news.module';
import { FilesModule } from './files/files.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://127.0.0.1',
      {
        pass: 'thisispwd',
        user: 'mongo',
        dbName: 'hayot-db'
      }
    ),
    PetsModule,
    MediaModule,
    NewsModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
