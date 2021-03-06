import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RecruitModule } from './recruit/recruit.module';
import { TestdataModule } from './testdata/testdata.module';
import { config } from 'ormconfig';
import { TechstackModule } from './techstack/techstack.module';
import { TaskModule } from './task/task.module';
import { GithubModule } from './github/github.module';
import { MemoirModule } from './memoir/memoir.module';
import { TrendModule } from './trend/trend.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(config),
    UserModule,
    AuthModule,
    RecruitModule,
    TestdataModule,
    TechstackModule,
    TaskModule,
    GithubModule,
    MemoirModule,
    TrendModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
