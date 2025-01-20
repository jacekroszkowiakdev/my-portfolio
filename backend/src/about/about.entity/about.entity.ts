import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class AboutEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  bio: string;

  @Column()
  profilePictureURL: string;

  @Column()
  contactEmail: string;
}
