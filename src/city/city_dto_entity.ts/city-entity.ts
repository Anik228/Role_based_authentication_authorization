import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn  } from 'typeorm';
import { Country } from '../../country/country_dto_entity/country.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'country_id' })
  countryId: number;

  @ManyToOne(() => Country, country => country.cities)
  @JoinColumn({ name: 'country_Id' })
  country: Country;
}