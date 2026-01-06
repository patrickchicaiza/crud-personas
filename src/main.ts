// Reemplaza TODO el contenido con:
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // CORS - PERMITE TU FRONTEND
  app.enableCors({
    origin: 'http://localhost:3000',  // React en 3000
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
  });
  
  await app.listen(3000);
  console.log('✅ Backend corriendo en: http://localhost:3000');
  console.log('✅ CORS habilitado para: http://localhost:3000');
}

bootstrap();