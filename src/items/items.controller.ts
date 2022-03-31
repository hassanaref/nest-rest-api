import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { createItemDto } from './dto/create-item.dto';
import {itemsService} from './items.service';
import {item} from './interfaces/item.interface'

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: itemsService){}

    @Get()
    async findAll() : Promise<item[]> {
        return this.itemService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id) : Promise<item> {
        return this.itemService.findOne(id)
    }

    @Post()
    create(@Body() createItemDto : createItemDto) : Promise<item>{
        return this.itemService.create(createItemDto);
    }

    @Delete(':id')
    async Delete(@Param('id') id): Promise<item>{
        return this.itemService.delete(id)
    }

    @Put(':id')
    update(@Body() updateItemDto:createItemDto, @Param('id') id) : Promise<item>{
        return this.itemService.update(id,updateItemDto)
    }
}
