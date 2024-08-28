module.exports = {
    student: `
      CREATE TABLE IF NOT EXISTS student (
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        name VARCHAR(30),
        email VARCHAR(30),
        password VARCHAR(255),
        address VARCHAR(50)
      )
    `,
    registerStudent: `
      INSERT INTO student (name, email, password, address) VALUES (?, ?, ?, ?)
    `,
    getAllStudent: `
      SELECT * FROM student
    `,
    getStudentById: `
      SELECT * FROM student WHERE id = ?
    `,
    updateStudent: `
      UPDATE student SET name = ?, email = ?, password = ?, address = ? WHERE id = ?
    `,
    deleteStudent: `
      DELETE FROM student WHERE id = ?`
  }