import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { TypeOrmRootConfig } from "./config/db.config";
import { PostsModule } from "./posts/posts.module";

@Module({
    imports: [TypeOrmRootConfig, PostsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
