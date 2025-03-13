import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoffeshopEventService } from './coffeshop-event.service';
import { CreateCoffeshopEventDto } from './dto/create-coffeshop-event.dto';
import { UpdateCoffeshopEventDto } from './dto/update-coffeshop-event.dto';

@Controller('coffeshop-event')
export class CoffeshopEventController {
  constructor(private readonly coffeshopEventService: CoffeshopEventService) {}

  @Post()
  create(@Body() createCoffeshopEventDto: CreateCoffeshopEventDto) {
    return this.coffeshopEventService.create(createCoffeshopEventDto);
  }

  @Get()
  findAll() {
    return this.coffeshopEventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeshopEventService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeshopEventDto: UpdateCoffeshopEventDto) {
    return this.coffeshopEventService.update(+id, updateCoffeshopEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeshopEventService.remove(+id);
  }
}
