import { Injectable } from '@nestjs/common';
import { item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class itemsService {
    constructor(@InjectModel('Item') private readonly itemModel:Model<item>) {};

    async findAll(): Promise<item[]> {
        return await this.itemModel.find();
    };

    async findOne(id:string): Promise<item> {
        return await this.itemModel.findOne({ _id: id});
    };

    async create(item: item) : Promise<item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    };

    async delete(id: string): Promise<item> {
        return await this.itemModel.findByIdAndRemove(id);
    };

    async update(id:string, item:item): Promise<item> {
        return await this.itemModel.findByIdAndUpdate(id, item, { new:true });
    };
};