import { Injectable } from '@nestjs/common';
import { Task } from '../entities/task.entity';
import { Repository, InsertResult } from 'typeorm'; 
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from './task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async create(Task: CreateTaskDTO): Promise<InsertResult> {
    return await this.taskRepository.insert(Task);
  }

  // エラーになるのでコメントアウト
  // async find(id: number): Promise<Task> | null {
  //   return await this.taskRepository.findOne({ task_id: id });
  // }
}
