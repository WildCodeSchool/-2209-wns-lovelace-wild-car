import { Field, ID, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";






@Entity()
@ObjectType()
export default class Ride {
  constructor(
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
    
  ) {
    this.driverName = driverName;
    this.departureCity = departureCity;
    this.departureAdress = departureAdress;
    this.rideDate = rideDate;
    this.arrivalCity = arrivalCity;
    this.maxPassagerNumber = maxPassagerNumber;
    this.maxPassagerLeft = maxPassagerLeft;
    this.ridePrice = ridePrice;
    this.smoker = smoker;
    this.pet = pet;
    }
  
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  driverName: string;

 

  @Column()
  @Field(() => String)
  departureCity: string;

 

  @Column()
  @Field(() => String)
  departureAdress: string;

 

  @Column()
  @Field(() => Date)
  rideDate: Date;

  

  @Column()
  @Field(() => String)
  arrivalCity: string;

 

  @Column()
  @Field(() => Number)
  maxPassagerNumber: number;



  @Column()
  @Field(() => Number)
  maxPassagerLeft: number;

  

  @Column()
  @Field(() => Number)
  ridePrice: number;



  @Column()
  @Field(() => Boolean)
  smoker: boolean;



  @Column()
  @Field(() => Boolean)
  pet: boolean;

  



}
