// database.js
import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('quiz.db');

const initDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS respostas (id INTEGER PRIMARY KEY AUTOINCREMENT, pergunta TEXT, resposta TEXT);'
    );
  });
};

const saveAnswers = (perguntas) => {
  perguntas.forEach((pergunta) => {
    db.transaction((tx) => {
      tx.executeSql('INSERT INTO respostas (pergunta, resposta) VALUES (?, ?);', [
        pergunta.pergunta,
        pergunta.resposta,
      ]);
    });
  });
};

const getAnswers = (callback) => {
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM respostas;', [], (_, { rows }) => {
      const result = [];
      for (let i = 0; i < rows.length; i++) {
        result.push(rows.item(i));
      }
      callback(result);
    });
  });
};

export { initDatabase, saveAnswers, getAnswers };
