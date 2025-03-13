import { Test, TestingModule } from '@nestjs/testing';
import { CoffeshopEventController } from './coffeshop-event.controller';
import { CoffeshopEventService } from './coffeshop-event.service';

describe('CoffeshopEventController', () => {
  let controller: CoffeshopEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeshopEventController],
      providers: [CoffeshopEventService],
    }).compile();

    controller = module.get<CoffeshopEventController>(CoffeshopEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
