import { Controller, Post, Body, Get } from '@nestjs/common';
import { CityService } from '../service/city.service';
import { CreateCityDto } from '../city_dto_entity.ts/city-dto';
import { City } from '../city_dto_entity.ts/city-entity';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post('add-cities')
  async create(@Body() createCityDto: CreateCityDto): Promise<City> {
    return this.cityService.create(createCityDto);
  }

  @Get('get-all-cities-with-countries')
  async findAll(): Promise<City[]> {
    return this.cityService.findAll();
  }
}