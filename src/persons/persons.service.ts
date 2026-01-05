import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepo: Repository<Person>,
  ) {}

  create(dto: CreatePersonDto) {
    const person = this.personRepo.create(dto);
    return this.personRepo.save(person);
  }

  findAll() {
    return this.personRepo.find();
  }

  findOne(id: number) {
    return this.personRepo.findOneBy({ id });
  }

  update(id: number, dto: UpdatePersonDto) {
    return this.personRepo.update(id, dto);
  }

  remove(id: number) {
    return this.personRepo.delete(id);
  }
}
