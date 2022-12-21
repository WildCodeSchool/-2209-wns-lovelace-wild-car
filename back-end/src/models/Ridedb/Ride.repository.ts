import { Repository } from "typeorm";
import Ride from "./Ride.entity";
import { getRepository } from "../../database/utils";
import Ridedb from "./Ride.db";

export default class RideRepository extends Ridedb {
  static async initializeRides(): Promise<void> {
    // await this.clearRepository();
    await this.repository.save([]);
  }

  static async getRides(): Promise<Ride[]> {
    return this.repository.find();
  }

  static async createRide(
    driverName: string,
  
  ): Promise<Ride> {
    const newRide = this.repository.create({ driverName });
    await this.repository.save(newRide);
    return newRide;
  }

  // static async updateWilder(
  //   id: string,
  //   firstName: string,
  //   lastName: string
  // ): Promise<
  //   {
  //     id: string;
  //     firstName: string;
  //     lastName: string;
  //   } & Wilder
  // > {
  //   const existingWilder = await this.repository.findOneBy({ id });
  //   if (!existingWilder) {
  //     throw Error("No existing Wilder matching ID.");
  //   }
  //   return this.repository.save({
  //     id,
  //     firstName,
  //     lastName,
  //   });
  // }

  // static async deleteWilder(id: string): Promise<Wilder> {
  //   const existingWilder = await this.findWilderById(id);
  //   if (!existingWilder) {
  //     throw Error("No existing Wilder matching ID.");
  //   }
  //   await this.repository.remove(existingWilder);
  //   // resetting ID because existingWilder loses ID after calling remove
  //   existingWilder.id = id;
  //   return existingWilder;
  // }

  // static async addSkillToWilder(
  //   wilderId: string,
  //   skillId: string
  // ): Promise<Wilder> {
  //   const wilder = await this.findWilderById(wilderId);
  //   if (!wilder) {
  //     throw Error("No existing Wilder matching ID.");
  //   }
  //   const skill = await SkillRepository.getSkillById(skillId);
  //   if (!skill) {
  //     throw Error("No existing skill matching ID.");
  //   }
  //   wilder.skills = [...wilder.skills, skill];
  //   return this.repository.save(wilder);
  // }
}
