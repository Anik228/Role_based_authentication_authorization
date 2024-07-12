// src/user/service/user.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../entity/user.dto';
import { LoginUserDto } from '../entity/user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<{ token: string }> {
    const { email, password, role } = createUserDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.usersRepository.create({ email, password: hashedPassword, role });
    await this.usersRepository.save(user);

    const token = this.jwtService.sign({ id: user.id, role: user.role });
    return { token };
  }

  async signIn(loginUserDto: LoginUserDto): Promise<{ token: string }> {
    const { email, password } = loginUserDto;

    const user = await this.usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.jwtService.sign({ id: user.id, role: user.role });
    return { token };
  }
}
