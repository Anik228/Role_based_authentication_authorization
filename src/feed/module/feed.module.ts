// src/feed/module/feed.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedController } from '../controller/feed.controller';
import { FeedService } from '../service/feed.service';
import { Post } from '../entity/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
