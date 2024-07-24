import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from '../../city/city_dto_entity.ts/city-entity';
import { CityService } from '../service/city.service';
import { CityController } from '../controller/city.controller';
import { CountryModule } from '../../country/module/country.module'; // Import CountryModule

@Module({
  imports: [TypeOrmModule.forFeature([City]), CountryModule], // Add CountryModule to imports
  providers: [CityService],
  controllers: [CityController],
  exports: [CityService],
})
export class CityModule {}
