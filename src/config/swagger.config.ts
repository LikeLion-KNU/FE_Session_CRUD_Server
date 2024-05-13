import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
    .setTitle("LikeLion CRUD API Documentation")
    .setDescription(
        "멋쟁이 사자처럼 12기 프론트엔드 CRUD 세션 API Documentation 입니다",
    )
    .setVersion("1.0")
    .build();
