import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));

  const config = new DocumentBuilder()
    .setTitle('NestJS Tutorial API Rest')
    .setDescription('Um exemplo básico de gerar API com NestJS')
    .setVersion('1.1')
    .build();

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000);
}
bootstrap();
