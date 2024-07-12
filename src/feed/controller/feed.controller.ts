// src/feed/controller/feed.controller.ts
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { FeedService } from '../service/feed.service';
import { CreatePostDto } from '../dto/post.dto';
import { Post as PostEntity } from '../entity/post.entity';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../auth/roles.guard';
import { Roles } from '../../auth/roles.decorator';

@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Post('create-post')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.feedService.create(createPostDto);
  }

  @Get('posts')
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<PostEntity[]> {
    return this.feedService.findAll();
  }
}
