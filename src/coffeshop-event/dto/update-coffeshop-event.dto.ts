import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeshopEventDto } from './create-coffeshop-event.dto';

export class UpdateCoffeshopEventDto extends PartialType(CreateCoffeshopEventDto) {}
