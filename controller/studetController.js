

const db=require('../model/index').db;
const student=require('../model/student');




const registerStudent=(req,res)=>{
    const {name,email,password,address}=req.body;
    db.query(student.registerStudent,[name,email,password,address],(err,result)=>{
        if(err){
            console.log("Student Register Error");
            return;
        }
        console.log("Student Register Success")
    })
}


const getAllStudent=(req,res)=>{
    db.query(student.getAllStudent,(err,result)=>{
        if(err){
           res.send({message:"Student Get All Error"})
        }else{
            res.send(result)
        }
       
    })
}



module.exports={registerStudent,getAllStudent}