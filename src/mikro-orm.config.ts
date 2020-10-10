import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "full-stack",
  type: "postgresql",
  user: "yongqian",
  password: "96719671",
  debug: !__prod__,
  //} as const;
} as Parameters<typeof MikroORM.init>[0];