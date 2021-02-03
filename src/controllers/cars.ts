import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('cars')
export class CarsController {
  @Get('')
  public getDisponibleCars(_: Request, res: Response): void {
    res.send([
      {
        description: 'Corsa',
        brand: 'Chevrolet',
        year: '2010/2011',
        color: 'Black',
        motor: 1.4,
        horsepower: 500,
        price: 27000,
        km: 0,
        img: 'https://www.google.com.br',
      },
      {
        description: 'Hilux',
        brand: 'Toyota',
        year: '2015/2016',
        color: 'Prata',
        motor: 1.4,
        horsepower: 800,
        price: 127000,
        km: 12000,
        img: 'https://www.google.com.br',
      },
    ]);
  }
}
