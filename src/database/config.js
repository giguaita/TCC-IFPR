import * as SQLite from 'expo-sqlite';
import Cadastro from './entities/cadastro';


const config = {
    database: "sydatabase",
    driver: SQLite,
    entities: [Cadastro],
    synchronize: true,
    type: " expo",
};

export default config;