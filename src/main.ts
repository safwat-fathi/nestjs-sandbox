import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import {
  BadRequestException,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // skipUndefinedProperties: true,
      exceptionFactory: (errors) => {
        const result = errors.map((error) => ({
          property: error.property,
          error: error.constraints[Object.keys(error.constraints)[0]],
        }));

        return new BadRequestException(result);
      },
    }),
  );
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.setGlobalPrefix('api');

  await app.listen(8080);
}

bootstrap();
