import { Server } from "./services/Server";

const app = new Server();

app.start(4000)