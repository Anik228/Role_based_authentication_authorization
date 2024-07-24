import { Controller, Post, Body, Get } from '@nestjs/common';
import { LeaderService } from '../service/leader.service';
import { CreateLeaderDto } from '../leader_dto_entity/leader.dto';
import { Leader } from '../leader_dto_entity/leader.entity';

@Controller('leaders')
export class LeaderController {
  constructor(private readonly leaderService: LeaderService) {}

  @Post('add-leader')
  async create(@Body() createLeaderDto: CreateLeaderDto): Promise<Leader> {
    return this.leaderService.create(createLeaderDto);
  }

  @Get('get-leaders')
  async findAll(): Promise<any> {
    const leaders = await this.leaderService.findAll();
    return leaders.map(leader => ({
      leader_id:leader.id,
      leader_name: leader.name,
      country: {
        id: leader.country.id,
        name: leader.country.name,
      },
    }));
  }
}
