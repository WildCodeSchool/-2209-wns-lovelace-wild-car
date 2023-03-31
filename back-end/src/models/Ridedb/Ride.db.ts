import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Ride from "./Ride.entity";

export default class RideDb {
  protected static repository: Repository<Ride>;
  static async initializeRepository() {
    this.repository = await getRepository(Ride);
  }

   protected static findRideById(wildcarId: string) {
    return this.repository.findOneBy({ id: wildcarId });
   }

   static async clearRepository(): Promise<void> {
     await this.repository.delete({});
   }
}
