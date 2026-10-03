import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller.js';
import { ReportsService } from './reports.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportEntity } from './report.entity.js';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService],
  imports: [TypeOrmModule.forFeature([ReportEntity])]
})
export class ReportsModule {}
