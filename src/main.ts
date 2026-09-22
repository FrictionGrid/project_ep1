import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist: true,forbidNonWhitelisted: true}));
  app.use(
    session({
      secret: process.env.SESSION_SECRET ?? 'change-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 4,
      },
    })
  );
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
