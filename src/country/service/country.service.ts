import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from '../country_dto_entity/country.entity';
import { CreateCountryDto } from '../country_dto_entity/country.dto';

import { City } from '../../city/city_dto_entity.ts/city-entity';
import { CreateCityDto } from '../../city/city_dto_entity.ts/city-dto';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}

  async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const country = this.countryRepository.create(createCountryDto);
    return this.countryRepository.save(country);
  }

  async findAllCoutry(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  async findAllCountryCities(): Promise<Country[]> {
    return this.countryRepository.find({ relations: ['cities'] });
  }

  async findOne(id: number): Promise<Country> {
    return this.countryRepository.findOne({ where: { id } });
  }
}