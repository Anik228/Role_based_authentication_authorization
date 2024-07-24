import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leader } from '../leader_dto_entity/leader.entity';
import { LeaderService } from '../service/leader.service';
import { LeaderController } from '../controller/leader.controller';

import { CountryModule } from '../../country/module/country.module'; // Import CountryModule

@Module({
  imports: [TypeOrmModule.forFeature([Leader]), CountryModule], // Add CountryModule to imports
  providers: [LeaderService],
  controllers: [LeaderController],
})
export class LeaderModule {}
