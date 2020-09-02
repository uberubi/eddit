import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, BaseEntity } from 'typeorm';
// import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field} from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt = Date

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = Date

  @Field()
  @Column({ unique: true})
  username!: string;

  @Field()
  @Column({ unique: true})
  email!: string;

  @Field()
  @Column()
  password!: string;
}
