import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Country } from '../../country/country_dto_entity/country.entity';

@Entity()
export class Leader {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'country_id' })
  countryId: number;

  @OneToOne(() => Country, (country) => country.leader)
  @JoinColumn({ name: 'country_id' })
  country: Country;
}
