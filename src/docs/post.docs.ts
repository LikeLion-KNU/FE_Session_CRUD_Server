import {
    BadRequestException,
    NotFoundException,
    applyDecorators,
} from "@nestjs/common";
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags,
} from "@nestjs/swagger";
import { PostModel } from "src/posts/entities/post.entity";
import { DeleteResult } from "typeorm";

export const ReadAllPostsDocs = () => {
    return applyDecorators(
        ApiTags("게시글 API"),
        ApiOperation({
            summary: "모든 post 조회",
            description: "모든 posts 를 조회합니다",
        }),
        ApiOkResponse({
            description: "OK",
            type: [PostModel],
        }),
    );
};

export const ReadPostByIdDocs = () => {
    return applyDecorators(
        ApiTags("게시글 API"),
        ApiOperation({
            summary: "posts 조회",
            description: "id 에 해당하는 posts 를 조회합니다",
        }),
        ApiOkResponse({
            description: "OK",
            type: PostModel,
        }),
        ApiNotFoundResponse({
            description: "Not Found",
            type: NotFoundException,
        }),
    );
};

export const CreatePostDocs = () => {
    return applyDecorators(
        ApiTags("게시글 API"),
        ApiOperation({
            summary: "post 생성",
            description: "post 를 생성합니다",
        }),
        ApiCreatedResponse({
            description: "OK",
            type: PostModel,
        }),
        ApiBadRequestResponse({
            description: "Bad Request",
            type: BadRequestException,
        }),
    );
};

export const UpdatePostDocs = () => {
    return applyDecorators(
        ApiTags("게시글 API"),
        ApiOperation({
            summary: "post 수정",
            description: "id 에 해당하는 post 를 수정합니다",
        }),
        ApiCreatedResponse({
            description: "OK",
            type: PostModel,
        }),
        ApiNotFoundResponse({
            description: "Not Found",
            type: NotFoundException,
        }),
    );
};

export const DeletePostDocs = () => {
    return applyDecorators(
        ApiTags("게시글 API"),
        ApiOperation({
            summary: "post 삭제",
            description: "id 에 해당하는 post 를 삭제합니다",
        }),
        ApiOkResponse({
            description: "OK",
            type: DeleteResult,
        }),
        ApiNotFoundResponse({
            description: "Not Found",
            type: NotFoundException,
        }),
    );
};
