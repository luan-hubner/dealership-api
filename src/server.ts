import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { CarsController } from '@controllers/cars';
import { Application } from 'express';

export class SetupServer extends Server {
  constructor(private port = 3333) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    const carsController = new CarsController();

    this.addControllers([carsController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
