import { IVehicle } from "../interfaces/IVehicle";
import { IVehicleRepository } from "../interfaces/IVehicleRepository";


export class VehicleService {
    private vehicleRepository: IVehicleRepository;

    constructor(vehicleRepository: IVehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    public async create(vehicleData: IVehicle) {
        // lógica para crear un vehículo
        return await this.vehicleRepository.create(vehicleData);
    }

    public async findById(id: string) {
        // lógica para encontrar un vehículo por ID
        return await this.vehicleRepository.findById(id);
    }

    public async update(id: string, vehicleData: IVehicle) {
        // lógica para actualizar un vehículo
        return await this.vehicleRepository.update(id, vehicleData);
    }

    public async delete(id: string) {
        // lógica para eliminar un vehículo
        return await this.vehicleRepository.delete(id);
    }
}
