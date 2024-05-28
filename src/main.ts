import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule } from "@nestjs/swagger";
import { swaggerConfig } from "./config/swagger.config";
import { ValidationPipe } from "@nestjs/common";
import { DelayInterceptor } from "./global/delay.interceptor";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalInterceptors(new DelayInterceptor());

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup("docs", app, document);

    app.enableCors({
        origin: "*",
    });

    await app.listen(8080);
}
bootstrap();
