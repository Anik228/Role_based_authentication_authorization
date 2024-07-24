import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './feed/module/feed.module';
import { UserModule } from './user/module/user.module';
import { CountryModule } from './country/module/country.module';
import { LeaderModule } from './leader/module/leader.module';
import { CityModule } from './city/module/city.module';
import { CityService } from './city/service/city.service';
import { CityController } from './city/controller/city.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'Auth_learn',
      autoLoadEntities: true,
      synchronize: true,
    }),
    FeedModule,
    UserModule,
    CountryModule,
    LeaderModule,
    CityModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}