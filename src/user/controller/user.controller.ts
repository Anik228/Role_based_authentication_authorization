// src/user/controller/user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../entity/user.dto';
import { LoginUserDto } from '../entity/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.userService.signUp(createUserDto);
  }

  @Post('signin')
  async signIn(@Body() loginUserDto: LoginUserDto) {
    return this.userService.signIn(loginUserDto);
  }
}
