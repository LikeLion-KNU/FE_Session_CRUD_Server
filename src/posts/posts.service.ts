import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PostModel } from "src/posts/entities/post.entity";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(PostModel)
        private readonly postRepository: Repository<PostModel>,
    ) {}

    public async readAllPosts() {
        return this.postRepository.find();
    }

    public async readPostById(id: number) {
        const post = await this.postRepository.findOne({ where: { id } });
        if (!post) throw new NotFoundException();
        return post;
    }

    public async createPost(createPostDto: CreatePostDto) {
        const newPost = await this.postRepository.create({
            ...createPostDto,
            likes: 0,
        });
        return this.postRepository.save(newPost);
    }

    public async updatePost(id: number, updatePostDto: UpdatePostDto) {
        const post = await this.postRepository.findOne({ where: { id } });
        if (!post) throw new NotFoundException();

        for (const key of Object.keys(updatePostDto)) {
            post[key] = updatePostDto[key];
        }

        return this.postRepository.save(post);
    }

    public async deletePost(id: number) {
        const post = await this.postRepository.findOne({ where: { id } });
        if (!post) throw new NotFoundException();
        return this.postRepository.delete(id);
    }
}
