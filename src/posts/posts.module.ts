import { Module } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostModel } from "src/posts/entities/post.entity";

@Module({
    imports: [TypeOrmModule.forFeature([PostModel])],
    exports: [PostsService],
    controllers: [PostsController],
    providers: [PostsService],
})
export class PostsModule {}
