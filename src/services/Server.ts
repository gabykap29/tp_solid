// App.ts
import express, { Application } from 'express';
import routerClient from '../routes/ClientRoutes';
import routerVehicles from '../routes/VehiclesRoutes';
export class Server {
    private app: Application;

    constructor() {
        this.app = express();
        this.app.use(express.json());

        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.app.use(routerVehicles);
        this.app.use(routerClient);

    }

    public start(port: number) {
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
}

