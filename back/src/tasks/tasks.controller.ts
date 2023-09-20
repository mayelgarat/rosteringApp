import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '../types/tasks-type';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }
}
