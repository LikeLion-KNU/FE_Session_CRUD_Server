import { ApiProperty } from "@nestjs/swagger";
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class PostModel {
    @PrimaryGeneratedColumn()
    @ApiProperty({ example: "number", description: "게시글의 ID" })
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @ApiProperty({ example: "string", description: "게시글의 제목" })
    title: string;

    @Column()
    @ApiProperty({ example: "string", description: "게시글의 작성자" })
    author: string;

    @Column()
    @ApiProperty({ example: "number", description: "게시글의 좋아요수" })
    likes: number;

    @Column()
    @ApiProperty({ example: "string", description: "게시글의 내용" })
    content: string;
}
