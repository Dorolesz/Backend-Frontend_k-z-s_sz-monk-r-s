import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeshopEventModule } from './coffeshop-event/coffeshop-event.module';

@Module({
  imports: [CoffeshopEventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
