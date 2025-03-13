import { Module } from '@nestjs/common';
import { CoffeshopEventService } from './coffeshop-event.service';
import { CoffeshopEventController } from './coffeshop-event.controller';

@Module({
  imports: [CoffeshopEventModule],
  controllers: [CoffeshopEventController],
  providers: [CoffeshopEventService],
})
export class CoffeshopEventModule {}
