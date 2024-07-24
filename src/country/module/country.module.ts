import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from '../country_dto_entity/country.entity';
import { CountryService } from '../service/country.service';
import { CountryController } from '../controller/country.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  providers: [CountryService],
  controllers: [CountryController],
  exports: [CountryService], // Export CountryService to use in other modules
})
export class CountryModule {}