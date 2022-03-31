import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { itemsModule } from './items/item.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './configs/keys'

@Module({
  imports: [itemsModule,MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
