import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Controller("posts")
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    public readAllPosts() {
        return this.postsService.readAllPosts();
    }

    @Get(":id")
    public readPostById(@Param("id") id: string) {
        return this.postsService.readPostById(Number(id));
    }

    @Post()
    public createPost(@Body() body: CreatePostDto) {
        return this.postsService.createPost(body);
    }

    @Patch(":id")
    public updatePost(@Param("id") id: string, @Body() body: UpdatePostDto) {
        return this.postsService.updatePost(Number(id), body);
    }

    @Delete(":id")
    public deletePost(@Param("id") id: string) {
        return this.postsService.deletePost(Number(id));
    }
}
