import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Leader } from '../leader_dto_entity/leader.entity';

import { CreateLeaderDto } from '../leader_dto_entity/leader.dto';

import { CountryService } from '../../country/service/country.service'; // Import CountryService

@Injectable()
export class LeaderService {
  constructor(
    @InjectRepository(Leader)
    private readonly leaderRepository: Repository<Leader>,
    private readonly countryService: CountryService, // Inject CountryService
  ) {}

  async create(createLeaderDto: CreateLeaderDto): Promise<Leader> {
    const country = await this.countryService.findOne(createLeaderDto.countryId);
    if (!country) {
      throw new Error('Country not found');
    }

    const leader = this.leaderRepository.create({
      name: createLeaderDto.name,
      countryId: createLeaderDto.countryId,
      country: country,
    });

    return this.leaderRepository.save(leader);
  }

  async findAll(): Promise<Leader[]> {
    return this.leaderRepository.find({ relations: ['country'] });
  }
}