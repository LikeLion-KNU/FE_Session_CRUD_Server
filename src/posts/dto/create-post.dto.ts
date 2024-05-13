import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePostDto {
    @IsString({ message: "title 은 string 이어야 합니다" })
    @ApiProperty({ example: "string" })
    title: string;

    @IsString({ message: "author 은 string 이어야 합니다" })
    @ApiProperty({ example: "string" })
    author: string;

    @IsString({ message: "content 은 string 이어야 합니다" })
    @ApiProperty({ example: "string" })
    content: string;
}
