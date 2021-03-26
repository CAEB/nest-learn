import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);

  const options = new DocumentBuilder()
    .setTitle('nest 学习后台管理API')
    .setDescription('供nest 学习后台管理端调用的API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(5000);
  console.log(`admin running at http://localhost:5000/api-docs`);
}
bootstrap();
