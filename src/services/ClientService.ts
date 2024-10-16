import { IClient } from "../interfaces/IClient";
import { IClientRepository } from "../interfaces/IClientRepository";

export class ClientService {
    constructor(private clientRepo: IClientRepository) {}

    async create(client: IClient): Promise<IClient> {
        return this.clientRepo.create(client);
    }

    async findById(id: string): Promise<IClient | null> {
        return this.clientRepo.findById(id);
    }

    async update(id: string, client: IClient): Promise<IClient | null> {
        return this.clientRepo.update(id, client);
    }

    async delete(id: string): Promise<boolean> {
        return this.clientRepo.delete(id);
    }
}