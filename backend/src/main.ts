import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('Tasks API')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  })
  SwaggerModule.setup('api', app, document)
  await app.listen(3000)
}
bootstrap()
