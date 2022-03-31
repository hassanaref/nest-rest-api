import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { itemsService } from './items.service';
import { itemSchema } from './schemas/items.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: itemSchema}])],
  controllers: [ItemsController],
  providers: [itemsService],
})
export class itemsModule {}
