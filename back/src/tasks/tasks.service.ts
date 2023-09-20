import { Injectable } from '@nestjs/common';
import { Task } from '../types/tasks-type';
import { tasks } from '../utils';

@Injectable()
export class TasksService {
  getTasks(): Task[] {
    return tasks;
  }
}
