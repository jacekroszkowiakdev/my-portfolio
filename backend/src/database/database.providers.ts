import { DataSource } from 'typeorm';
import { Logger } from '@nestjs/common';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

export const DatabaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () => {
      const logger = new Logger('DatabaseProvider');
      try {
        const dataSource = new DataSource({
          type: 'postgres',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT, 10),
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          entities:
            process.env.NODE_ENV === 'production'
              ? ['dist/**/*.entity.js']
              : ['src/**/*.entity.ts'],
          synchronize: process.env.NODE_ENV !== 'production', // Disable in production
        });
        return await dataSource.initialize();
      } catch (err) {
        logger.error('Error initializing the database connection', err);
        throw err;
      }
    },
  },
];
