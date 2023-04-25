import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/users.controller';
import { ExceptionFilter } from './errors/exception.filter';

class App {
    app: Express;
    server: Server;
    port: number;
    logger: LoggerService;
    userController: UserController;
    exceptionFilter: ExceptionFilter;

    constructor (
        logger: LoggerService, 
        userController: UserController, 
        exceptionFilter: ExceptionFilter
    ) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
        this.userController = userController;
        this.exceptionFilter = exceptionFilter;
    }

    useRoutes() {
        this.app.use('/users', this.userController.router);
    }

    useExceptionFilters() {
        this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
        this.logger.log(`Started: Exception Filter`);
    }

    public async init() {
        this.useRoutes();
        this.useExceptionFilters();
        this.server = this.app.listen(this.port);
        this.logger.log(`The server started at: http://localhost:${this.port}`);
    }
}

export { App };