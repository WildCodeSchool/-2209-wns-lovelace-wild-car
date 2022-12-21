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
  @Field()
  driverName: string;

  @Field(() => String)
  getdriverName() {
    return `${this.driverName}`;
  }

  @Column()
  @Field()
  departureCity: string;

  @Field(() => String)
  getdepartureCity() {
    return `${this.departureCity}`;
  }

  @Column()
  @Field()
  departureAdress: string;

  @Field(() => String)
  getdepartureAdress() {
    return `${this.departureAdress}`;
  }

  @Column()
  @Field()
  rideDate: Date;

  @Field(() => Date)
  getrideDate() {
    return `${this.rideDate}`;
  }

  @Column()
  @Field()
  arrivalCity: string;

  @Field(() => String)
  getarrivalCity() {
    return `${this.arrivalCity}`;
  }

  @Column()
  @Field()
  maxPassagerNumber: number;

  @Field(() => Number)
  getmaxPassagerNumber() {
    return `${this.maxPassagerNumber}`;
  }

  @Column()
  @Field()
  maxPassagerLeft: number;

  @Field(() => Number)
  getmaxPassagerLeft() {
    return `${this.maxPassagerLeft}`;
  }

  @Column()
  @Field()
  ridePrice: number;

  @Field(() => Number)
  getridePrice() {
    return `${this.ridePrice}`;
  }

  @Column()
  @Field()
  smoker: boolean;

  @Field(() => Boolean)
  getsmoker() {
    return `${this.smoker}`;
  }

  @Column()
  @Field()
  pet: boolean;

  @Field(() => Boolean)
  getpet() {
    return `${this.pet}`;
  }



}
