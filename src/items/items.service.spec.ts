import { Test, TestingModule } from '@nestjs/testing';
import { itemsService } from './items.service';

describe('ItemsService', () => {
  let service: itemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [itemsService],
    }).compile();

    service = module.get<itemsService>(itemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
