import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // CORS para desarrollo
  const allowedOrigins = [
    'http://localhost:3000',  // Backend mismo (para pruebas directas)
    'http://localhost:3001',  // React (Create React App si cambia puerto)
    'http://localhost:5173',  // Vite default
    'http://localhost:4200',  // Angular default
  ];
  
  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log('='.repeat(50));
  console.log(`🚀 Backend NestJS CRUD Personas`);
  console.log(`📍 URL: http://localhost:${port}`);
  console.log(`🌍 Entorno: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🗄️  Base de datos: ${process.env.DB_HOST}:${process.env.DB_PORT}`);
  console.log(`🔗 CORS habilitado para: ${allowedOrigins.join(', ')}`);
  console.log('='.repeat(50));
  
  // Health check endpoint automático
  console.log(`✅ Health check: http://localhost:${port}/health`);
  console.log(`📚 Swagger: http://localhost:${port}/api (si tienes instalado)`);
}

bootstrap();