
import {Express} from "express";
import {UsersRoute} from "./route/users.route";

export class Routes {
    private routeController: UsersRoute;

    constructor(app: Express, routeController: UsersRoute) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }

    private configureRoutes(app: Express) {
        app.route("/users")
            .post(this.routeController.addUser);
        app.route("/users")
            .get(this.routeController.getUsers);
        app.route("/users/:userid")
            .get(this.routeController.getUserId);
    }
}