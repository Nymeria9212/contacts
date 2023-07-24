import "dotenv/config";
import path from "node:path";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

const DataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{js,ts}"
  );

  if (!process.env.DATABASE_URL) {
    throw new Error("Baseurl not exist");
  }

  return {
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [entitiesPath],
    migrations: [migrationsPath],
    synchronize: false,
    logging: true,
  };
};

const AppDataSource: DataSource = new DataSource(DataSourceConfig());

export { AppDataSource };
