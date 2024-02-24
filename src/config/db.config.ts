import { TypeOrmModule } from "@nestjs/typeorm";
import { PostModel } from "src/models/post.model";

export const RootEntities = [PostModel];

export const TypeOrmRootConfig = TypeOrmModule.forRoot({
    type: "sqlite",
    database: "database.db",
    entities: RootEntities,
    synchronize: true,
});
