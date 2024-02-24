import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PostModel } from "src/models/post.model";
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
        const post = this.postRepository.findOne({ where: { id } });
        if (!post) throw new NotFoundException();
        return post;
    }

    public async createPost(createPostDto: CreatePostDto) {
        const newPost = this.postRepository.create({
            ...createPostDto,
            likes: 0,
        });
        console.log(newPost);
        return this.postRepository.save(newPost);
    }

    public async updatePost(id: number, updatePostDto: UpdatePostDto) {
        const post = await this.postRepository.findOne({ where: { id } });
        if (!post) {
            console.log("notfound");
            throw new NotFoundException();
        }

        if (updatePostDto.title) post.title = updatePostDto.title;
        if (updatePostDto.author) post.author = updatePostDto.author;
        if (updatePostDto.content) post.content = updatePostDto.content;

        return this.postRepository.save(post);
    }

    public async deletePost(id: number) {
        const post = await this.postRepository.findOne({ where: { id } });
        if (!post) throw new NotFoundException();
        return this.postRepository.delete(id);
    }
}
