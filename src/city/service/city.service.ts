import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from '../city_dto_entity.ts/city-entity';
import { CreateCityDto } from '../city_dto_entity.ts/city-dto';
import { CountryService } from '../../country/service/country.service';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
    private readonly countryService: CountryService, // Inject CountryService
  ) {}

  async create(createCityDto: CreateCityDto): Promise<City> {
    const country = await this.countryService.findOne(createCityDto.countryId);
    if (!country) {
      throw new NotFoundException(`Country with ID ${createCityDto.countryId} not found`);
    }

    const city = this.cityRepository.create({
      ...createCityDto,
      country,
    });

    return this.cityRepository.save(city);
  }

  async findAll(): Promise<City[]> {
    return this.cityRepository.find({ relations: ['country'] });
  }
}