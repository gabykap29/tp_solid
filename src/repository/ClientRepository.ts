import { IClient } from "../interfaces/IClient";
import { IClientRepository } from "../interfaces/IClientRepository";

export class ClientRepository implements IClientRepository {
    private clients: IClient[] = []; // Simulación de base de datos

    async create(client: IClient): Promise<IClient> {
        this.clients.push(client);
        return client;
    }

    async findById(id: string): Promise<IClient | null> {
        return this.clients.find(c => c.id === id) || null;
    }

    async update(id: string, client: IClient): Promise<IClient | null> {
        const index = this.clients.findIndex(c => c.id === id);
        if (index === -1) return null;
        this.clients[index] = client;
        return client;
    }

    async delete(id: string): Promise<boolean> {
        const index = this.clients.findIndex(c => c.id === id);
        if (index === -1) return false;
        this.clients.splice(index, 1);
        return true;
    }
}