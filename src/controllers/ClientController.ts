import { Request, Response } from 'express';
import { ClientService } from '../services/ClientService';
import { IClient } from '../interfaces/IClient'; 

export class ClientController {
    constructor(private clientService: ClientService) {}

    async create(req: Request, res: Response) {
        const client: IClient = req.body;
        const createdClient = await this.clientService.create(client);
        res.status(201).json(createdClient);
    }

    async getById(req: Request, res: Response) {
        const client = await this.clientService.findById(req.params.id);
        if (!client) return res.status(404).send('Client not found');
        res.json(client);
    }

    async update(req: Request, res: Response) {
        const client: IClient = req.body;
        const updatedClient = await this.clientService.update(req.params.id, client);
        if (!updatedClient) return res.status(404).send('Client not found');
        res.json(updatedClient);
    }

    async delete(req: Request, res: Response) {
        const deleted = await this.clientService.delete(req.params.id);
        if (!deleted) return res.status(404).send('Client not found');
        res.status(204).send();
    }
}
