import { Module } from '@nestjs/common';
import { CoffeshopEventService } from './coffeshop-event.service';
import { CoffeshopEventController } from './coffeshop-event.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [CoffeshopEventModule],
  controllers: [CoffeshopEventController],
  providers: [CoffeshopEventService, PrismaService],
})
export class CoffeshopEventModule {}
