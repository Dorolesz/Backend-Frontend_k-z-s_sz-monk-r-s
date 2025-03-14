import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoffeshopEventService } from './coffeshop-event.service';
import { CreateCoffeshopEventDto } from './dto/create-coffeshop-event.dto';
import { UpdateCoffeshopEventDto } from './dto/update-coffeshop-event.dto';

@Controller('coffeshop-event')
export class CoffeshopEventController {
  constructor(private readonly coffeshopEventService: CoffeshopEventService) {}

  @Post()
  async createEvent(@Body() createCoffeshopEventDto: CreateCoffeshopEventDto) {
    return this.coffeshopEventService.createEvent(createCoffeshopEventDto);
  }

  @Get()
  async getEvent() {
    return this.coffeshopEventService.getAllEvent();
  }

  @Get(':id')
  async getEventById(@Param('id') id: string) {
    return this.coffeshopEventService.getEventById(+id);
  }

  @Patch(':id')
  async updateEvent(@Param('id') id: string, @Body() updateCoffeshopEventDto: UpdateCoffeshopEventDto) {
    return this.coffeshopEventService.updateEvent(+id, updateCoffeshopEventDto);
  }

  @Delete(':id')
  async deleteEvent(@Param('id') id: string) {
    return this.coffeshopEventService.deleteEvent(+id);
  }
}
