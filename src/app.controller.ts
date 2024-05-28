import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { PostsService } from "./posts/posts.service";
import { dummyData } from "./dummy.data";

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly postsService: PostsService,
    ) {}

    @Get("dummy")
    public async createDummyPosts() {
        dummyData.forEach((post) => {
            this.postsService.createPost(post);
        });
        return `${dummyData.length} of dummy posts created.`;
    }
}
