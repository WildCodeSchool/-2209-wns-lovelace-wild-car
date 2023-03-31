 import {   IsInt, IsUUID, MinLength, IsBoolean, IsDate } from "class-validator";
 import { ArgsType, Field, ID } from "type-graphql";
 
 

 

 @ArgsType()
 class CreateRideArgs {


   @Field()
   @MinLength(1, {
     message: "Le prénom et nom doit faire au moins un caractère de long.",
   })
   driverName: string;

   @Field()
  @MinLength(1, { message: "La ville de départ doit faire au moins un caractère de long." })
  departureCity: string;

   @Field()
  @MinLength(1, { message: "L'adresse de départ doit faire au moins un caractère de long." })
  departureAdress: string;

   @Field( )
   @IsDate()
  rideDate: Date;


   @Field()
  @MinLength(1, { message: "L'adresse d'arriver doit faire au moins un caractère de long." })
  arrivalCity: string;

   @Field()
   @IsInt()
  maxPassagerNumber: number;

   @Field()
   @IsInt()
  maxPassagerLeft: number;

   @Field()
   @IsInt()
  ridePrice: number;

   @Field()
   @IsBoolean()
  smoker: boolean;

   @Field()
   @IsBoolean()
   pet: boolean;
 }



 @ArgsType()
 class UpdateRideArgs extends CreateRideArgs {
   @Field(() => ID)
   @IsUUID()
   id: string;
 }

 export { CreateRideArgs, UpdateRideArgs };

 
