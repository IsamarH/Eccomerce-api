import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

const dbcountries= [
  {
    id: 1,
    name: 'Colombia',
  },
  {
    id: 2,
    name: 'Canada',
  },
  {
    id: 2,
    name: 'Nicaragua',
  },
  {
    id: 2,
    name: 'Costa Rica',
  }
];

@Injectable()
export class CountriesService {
  create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }

  findAll() {
    return dbcountries;
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
