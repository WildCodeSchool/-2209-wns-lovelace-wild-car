import { Arg, Args, Ctx, Mutation, Query, Resolver } from "type-graphql";

import Ride from "../../models/Ridedb/Ride.entity";
import RideRepository from "../../models/Ridedb/Ride.repository";
// import { CreateRideArgs, UpdateWilderArgs } from "./Ride.input";

@Resolver(Ride)
export default class RideResolver {
  @Query(() => [Ride])
  wilders(): Promise<Ride[]> {
    return RideRepository.getRides();
  }
/*
  @Mutation(() => Wilder)
  createWilder(
    @Args() { firstName, lastName }: CreateWilderArgs
  ): Promise<Wilder> {
    return WilderRepository.createWilder(firstName, lastName);
  }

  @Mutation(() => Wilder)
  updateWilder(
    @Args() { id, firstName, lastName }: UpdateWilderArgs
  ): Promise<Wilder> {
    return WilderRepository.updateWilder(id, firstName, lastName);
  }

  @Mutation(() => Wilder)
  deleteWilder(@Arg("id") id: string): Promise<Wilder> {
    return WilderRepository.deleteWilder(id);
  }

  @Mutation(() => Wilder)
  addSkillToWilder(
    @Arg("wilderId") wilderId: string,
    @Arg("skillId") skillId: string
  ): Promise<Wilder> {
    return WilderRepository.addSkillToWilder(wilderId, skillId);
  }*/ 
}
