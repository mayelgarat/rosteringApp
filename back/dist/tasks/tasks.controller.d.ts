import { TasksService } from './tasks.service';
import { Task } from '../types/tasks-type';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getTasks(): Task[];
}
