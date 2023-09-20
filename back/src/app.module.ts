import { Module } from '@nestjs/common';
import { TasksController } from './tasks/tasks.controller';
import { DriversController } from './drivers/drivers.controller';
import { TasksService } from './tasks/tasks.service';
import { DriversService } from './drivers/drivers.service';

@Module({
  imports: [],
  controllers: [DriversController, TasksController],
  providers: [TasksService, DriversService],
})
export class AppModule {}
