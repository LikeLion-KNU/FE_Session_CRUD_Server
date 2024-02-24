import { TypeOrmModule } from "@nestjs/typeorm";

export const RootEntities = [];

export const TypeOrmRootConfig = TypeOrmModule.forRoot({
    type: "sqlite",
    database: "database.db",
    entities: RootEntities,
    synchronize: true,
});
