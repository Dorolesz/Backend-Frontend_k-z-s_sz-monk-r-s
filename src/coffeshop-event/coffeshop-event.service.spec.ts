import { Test, TestingModule } from '@nestjs/testing';
import { CoffeshopEventService } from './coffeshop-event.service';

describe('CoffeshopEventService', () => {
  let service: CoffeshopEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeshopEventService],
    }).compile();

    service = module.get<CoffeshopEventService>(CoffeshopEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
