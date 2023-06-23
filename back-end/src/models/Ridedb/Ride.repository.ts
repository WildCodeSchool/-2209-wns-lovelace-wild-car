import { Repository } from "typeorm";
import Ride from "./Ride.entity";
import { getRepository } from "../../database/utils";
import Ridedb from "./Ride.db";

export default class RideRepository extends Ridedb {
  static async initializeRides(): Promise<void> {
     await this.clearRepository();
    await this.repository.save([]);
  }

  static async getRides(): Promise<Ride[]> {
    return this.repository.find();
  }


  static async  getRidesId(id: string) {
    return this.repository.findOneBy({ id });
   }

  

  static async createRide(
    driverName: string,
    departureCity: string,
    departureAdress: string,
    rideDate: Date,
    arrivalCity: string,
    maxPassagerNumber: number,
    maxPassagerLeft:number,
    ridePrice:number,
    smoker: boolean,
    pet: boolean,
  
  ): Promise<Ride> {
    const newRide = this.repository.create({ driverName, departureCity,
      departureAdress, rideDate, arrivalCity, maxPassagerNumber, maxPassagerLeft, ridePrice,
     smoker, pet });
    await this.repository.save(newRide);
    return newRide;
  }


  static async deleteRide(id: string): Promise<Ride> {
    const existingRide = await this.findRideById(id);
     if (!existingRide) {
         throw Error("Aucun trajet trouver.");
       }
       await this.repository.remove(existingRide);
        //resetting ID because existingRide loses ID after calling remove
       existingRide.id = id;
       return existingRide;
     }
  


   static async updateRide(
    id: string,
    driverName: string,
    departureCity: string,
    departureAdress: string,
    rideDate: Date,
    arrivalCity: string,
    maxPassagerNumber: number,
    maxPassagerLeft:number,
    ridePrice:number,
    smoker: boolean,
    pet: boolean,
   ): Promise<
     {
      id: string,
      driverName: string;
      departureCity: string;
      departureAdress: string;
      rideDate: Date;
      arrivalCity: string;
     maxPassagerNumber: number;
      maxPassagerLeft:number;
      ridePrice:number;
      smoker: boolean;
      pet: boolean;
     } & Ride
   > {
     const existingRide = await this.repository.findOneBy({ id });
   if (!existingRide) {
       throw Error("Aucun trajet correspondant trouver.");
     }
      return this.repository.save({
      id,
      driverName,
      departureCity,
      departureAdress,
      rideDate,
      arrivalCity,
      maxPassagerNumber,
      maxPassagerLeft,
      ridePrice,
      smoker,
      pet,
    });
   }
  }


