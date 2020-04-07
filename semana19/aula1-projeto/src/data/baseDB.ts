import Knex from "knex";

export abstract class BaseDB {
    protected connection = Knex({
      client: "mysql",
      connection: {
        host: process.env.HOST_SECRET,
        port: 3306,
        user: process.env.USER_SECRET,
        password: process.env.PASSWORD_SECRET,
        database: process.env.DATABASE_SECRET
      }
    })
}