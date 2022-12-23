import { Arg, Args, Ctx, Mutation, Query, Resolver } from "type-graphql";

import Ride from "../../models/Ridedb/Ride.entity";
import RideRepository from "../../models/Ridedb/Ride.repository";
import { CreateRideArgs } from "./Ride.input";

@Resolver(Ride)
export default class RideResolver {
  @Query(() => [Ride])
  rides(): Promise<Ride[]> {
    return RideRepository.getRides();
  }

  @Mutation(() => Ride)
  createRide(
    @Args() { driverName, departureCity, departureAdress, rideDate,
      arrivalCity, maxPassagerNumber, maxPassagerLeft, ridePrice,
      smoker, pet  }: CreateRideArgs
  ): Promise<Ride> {
    return RideRepository.createRide( driverName, departureCity,
       departureAdress, rideDate, arrivalCity, maxPassagerNumber, maxPassagerLeft, ridePrice,
      smoker, pet);
  }

  @Mutation(() => Ride)
  deleteRide(@Arg("id") id: string): Promise<Ride> {
    return RideRepository.deleteRide(id);
  }}

/*
  @Mutation(() => Wilder)
  updateWilder(
    @Args() { id, firstName, lastName }: UpdateWilderArgs
  ): Promise<Wilder> {
    return WilderRepository.updateWilder(id, firstName, lastName);
  }
  
  @Mutation(() => Wilder)
  addSkillToWilder(
    @Arg("wilderId") wilderId: string,
    @Arg("skillId") skillId: string
  ): Promise<Wilder> {
    return WilderRepository.addSkillToWilder(wilderId, skillId);
  }*/ 

