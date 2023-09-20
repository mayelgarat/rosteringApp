import { DriversService } from './drivers.service';
import { Driver } from 'src/types/drivers-type';
export declare class DriversController {
    private readonly driversService;
    constructor(driversService: DriversService);
    getDrivers(): Driver[];
}
