// DiscountedVehicleService.ts
import { VehicleService } from './VehicleService';
import { IVehicle } from '../interfaces/IVehicle';

export class DiscountedVehicleService extends VehicleService {
    applyDiscount(vehicle: IVehicle, discountPercentage: number): IVehicle {
        const discountAmount = (vehicle.price * discountPercentage) / 100;
        vehicle.price -= discountAmount;
        return vehicle;
    }
}
