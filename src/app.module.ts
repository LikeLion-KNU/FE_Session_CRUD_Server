import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { TypeOrmRootConfig } from "./config/db.config";

@Module({
    imports: [TypeOrmRootConfig],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
