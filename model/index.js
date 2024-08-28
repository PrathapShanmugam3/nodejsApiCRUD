

const mysql=require('mysql2');
const dbConfig=require('../dbConfig/dbConfig');



const db=mysql.createConnection({
    host:dbConfig.dev.HOST,
    user:dbConfig.dev.USER,
    password:dbConfig.dev.PASSWORD,
    port:dbConfig.dev.PORT
});


db.connect((err)=>{
    if(err){
        console.log("DB Connected Error");
        return;
    }
    console.log("DB Connected Success");

    db.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.dev.DATABASE}\``, (err, result) => {
        if (err) {
            console.error("Error Creating DB:", err.message);  // Improved error message
            return;
        }
        console.log("DB Created Successfully");

        // Select the created database
        db.changeUser({ database: dbConfig.dev.DATABASE }, (err) => {
            if (err) {
                console.error("Error Selecting Database:", err.message);
                return;
            }
            console.log("Database Selected Successfully");
            createStudentTable();
        });
    });
    
})


function createStudentTable() {
    const studentTable = require('../model/student').student; // Import the CREATE TABLE query

    db.query(studentTable, (err, result) => {
        if (err) {
            console.error("Student Table Created Error:", err.message);
            return;
        }
        console.log("Student Table Created Success");
    });
}


module.exports={db}