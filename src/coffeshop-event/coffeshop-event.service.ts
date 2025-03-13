import { Injectable } from '@nestjs/common';
import { CreateCoffeshopEventDto } from './dto/create-coffeshop-event.dto';
import { UpdateCoffeshopEventDto } from './dto/update-coffeshop-event.dto';

@Injectable()
export class CoffeshopEventService {
  create(createCoffeshopEventDto: CreateCoffeshopEventDto) {
    return 'This action adds a new coffeshopEvent';
  }

  findAll() {
    return `This action returns all coffeshopEvent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coffeshopEvent`;
  }

  update(id: number, updateCoffeshopEventDto: UpdateCoffeshopEventDto) {
    return `This action updates a #${id} coffeshopEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} coffeshopEvent`;
  }
}
