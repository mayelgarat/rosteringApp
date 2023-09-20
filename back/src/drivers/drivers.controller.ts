import { Controller, Get } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { Driver } from 'src/types/drivers-type';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Get()
  getDrivers(): Driver[] {
    return this.driversService.getDrivers();
  }
}
