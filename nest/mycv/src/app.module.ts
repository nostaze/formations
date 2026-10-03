import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { ReportsModule } from './reports/reports.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/user.entity.js';
import { ReportEntity } from './reports/report.entity.js';

@Module({
  imports: [UsersModule, ReportsModule, 
    TypeOrmModule.forRoot({
    type: 'better-sqlite3',
    database: 'db.sqlite',
    entities: [UserEntity, ReportEntity],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
