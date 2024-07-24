import { Entity, PrimaryGeneratedColumn, Column, OneToOne,OneToMany } from 'typeorm';
import { Leader } from '../../leader/leader_dto_entity/leader.entity';
import { City } from '../../city/city_dto_entity.ts/city-entity';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Leader, (leader) => leader.country)
  leader: Leader;


  @OneToMany(() => City, city => city.country)
  cities: City[];
}
