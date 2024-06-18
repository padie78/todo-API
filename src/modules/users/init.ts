import {Express} from "express";
import {UsersRoute} from "./route/users.route";
import {Routes} from "./routes";

export class UsersModule {
    public routes: Routes;

    constructor(app: Express) {
        this.routes = new Routes(app, new UsersRoute());
    }
}