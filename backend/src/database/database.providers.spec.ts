import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseProviders } from './database.providers';
import { DataSource } from 'typeorm';

describe('DatabaseProviders', () => {
  let provider: typeof DatabaseProviders;
  let dataSource: DataSource;

  it('should be defined', async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: DatabaseProviders,
    }).compile();

    const provider = module.get('DATABASE_CONNECTION');

    expect(provider).toBeDefined();
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  const mockDatabaseProvider = {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => ({
      isInitialized: true,
    }),
  };

  it('should initialize the database connection', async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [mockDatabaseProvider],
    }).compile();

    dataSource = module.get('DATABASE_CONNECTION');
    expect(dataSource).toBeDefined();
    expect(dataSource.isInitialized).toBe(true);
  });
});
