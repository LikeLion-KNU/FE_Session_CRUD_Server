import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PostModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    likes: number;

    @Column()
    content: string;
}
