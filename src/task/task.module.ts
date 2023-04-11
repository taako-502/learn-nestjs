import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { AppService } from './../app.service';
import { TaskService } from './task.service';
import { Task } from '../entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TaskController],
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [AppService, TaskService],
})
export class TaskModule {}
