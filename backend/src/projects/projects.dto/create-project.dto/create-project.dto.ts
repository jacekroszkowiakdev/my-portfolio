// src/projects/dto/create-project.dto.ts
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  technologies: string;

  @IsNotEmpty()
  @IsUrl()
  imageURL: string;

  @IsNotEmpty()
  @IsUrl()
  liveDemoURL: string;

  @IsNotEmpty()
  @IsUrl()
  repoURL: string;
}
