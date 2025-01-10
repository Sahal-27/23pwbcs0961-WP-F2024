import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "Hospital_Project_WP",
    }).then(()=>{
        console.log("connected to data base");
    }).catch(err=>{
        console.log(`some error occured while connecting to data base: ${err}`);
    });
};
