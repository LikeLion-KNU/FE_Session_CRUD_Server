import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import {
    CreatePostDocs,
    DeletePostDocs,
    ReadAllPostsDocs,
    ReadPostByIdDocs,
    UpdatePostDocs,
} from "src/docs/post.docs";

@Controller("posts")
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    @ReadAllPostsDocs()
    public readAllPosts() {
        return this.postsService.readAllPosts();
    }

    @Get(":id")
    @ReadPostByIdDocs()
    public readPostById(@Param("id", ParseIntPipe) id: number) {
        return this.postsService.readPostById(id);
    }

    @Post()
    @CreatePostDocs()
    public createPost(@Body() body: CreatePostDto) {
        return this.postsService.createPost(body);
    }

    @Patch(":id")
    @UpdatePostDocs()
    public updatePost(
        @Param("id", ParseIntPipe) id: string,
        @Body() body: UpdatePostDto,
    ) {
        return this.postsService.updatePost(Number(id), body);
    }

    @Delete(":id")
    @DeletePostDocs()
    public deletePost(@Param("id") id: string) {
        return this.postsService.deletePost(Number(id));
    }
}
