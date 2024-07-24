
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CountryService } from '../service/country.service';
import { CreateCountryDto } from '../country_dto_entity/country.dto';
import { Country } from '../country_dto_entity/country.entity';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post('add-country')
  async create(@Body() createCountryDto: CreateCountryDto): Promise<Country> {
    return this.countryService.create(createCountryDto);
  }

  @Get('get-all-country-with-cities')
  async findAllCountryCities(): Promise<Country[]> {
    return this.countryService.findAllCountryCities();
  }

  @Get('get-all-country')
  async findAllCoutry(): Promise<Country[]> {
    return this.countryService.findAllCoutry();
  }

}