import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PersonsModule } from './persons/persons.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: +config.get('DB_PORT'),
        username: config.get('DB_USERNAME'),  // ← USA DB_USERNAME
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_DATABASE'),  // ← USA DB_DATABASE
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),

    PersonsModule,
  ],
})
export class AppModule {}