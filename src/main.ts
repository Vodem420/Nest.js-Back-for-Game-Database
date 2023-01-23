import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function start (){
    const PORT = process.env.PORT || 8080;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
    .setTitle('swagger title')
    .setDescription('docs')
    .setVersion('1.0.0')
    .addTag('tag for smth')
    .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => console.log(`Server started on ${PORT} port`))
}

start();

