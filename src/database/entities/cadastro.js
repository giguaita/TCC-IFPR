import {EntitySchema} from "typeora";

const Cadastro = new EntitySchema ({
    name: "Cadastro", //nome da entidade
    tableName: "Cadastros", //nome da tabela no banco de dados
    coluns: {

        id:{ 
        primary: true,
        type: "int",
        generated: true,
    }, //as colunas da tabela
    email: {
        type: "varchar",
    },
    password: {
        type: "varchar",
    },
},
});

export default Cadastro;