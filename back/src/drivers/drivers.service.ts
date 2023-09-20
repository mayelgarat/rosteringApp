import { Injectable } from '@nestjs/common';
import { Driver } from 'src/types/drivers-type';
import { drivers } from '../utils';

@Injectable()
export class DriversService {
  getDrivers(): Driver[] {
    return drivers;
  }
}
