import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes .env variables accessible globally
      envFilePath: '.env', // Path to the .env file
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
