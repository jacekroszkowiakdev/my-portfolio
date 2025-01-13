import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  technologies: string;

  @Column()
  imageURL: string;

  @Column()
  liveDemoURL: string;

  @Column()
  repoURL: string;
}
