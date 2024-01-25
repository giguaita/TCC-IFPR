import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('quizdb.db');

class QuizDatabase {
  constructor() {
    db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
      console.log('Foreign keys turned on')
    );
    this.initDb();
  }

  initDb() {
    const sql = [
      `CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question_text TEXT NOT NULL
      );`,
      `CREATE TABLE IF NOT EXISTS answers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        answer_text TEXT NOT NULL,
        is_correct INTEGER DEFAULT 0,
        question_id INTEGER,
        FOREIGN KEY (question_id) REFERENCES questions (id)
      );`,
      `INSERT INTO questions (question_text) VALUES ('What is the capital of France?');`,
      `INSERT INTO answers (answer_text, is_correct, question_id) VALUES ('Paris', 1, 1);`,
      `INSERT INTO answers (answer_text, is_correct, question_id) VALUES ('Berlin', 0, 1);`,
      // Add more questions and answers as needed
    ];

    db.transaction(
      tx => {
        for (let i = 0; i < sql.length; i++) {
          console.log("execute sql: " + sql[i]);
          tx.executeSql(sql[i]);
        }
      },
      error => {
        console.log("error callback: " + JSON.stringify(error));
        console.log(error);
      },
      () => {
        console.log("transaction complete callback");
      }
    );
  }
}

export default QuizDatabase;
