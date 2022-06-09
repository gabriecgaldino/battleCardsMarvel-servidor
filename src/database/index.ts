import { DataSource } from "typeorm";

const datasource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "marvel_app",
    migrations: [ "src/database/migrations/*.ts" ]
})

datasource.initialize()
    .then(()=> {
        console.log('Connected')
    }).catch((err)=> console.log(err))


export default datasource