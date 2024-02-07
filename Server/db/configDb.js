const mysql = require("mysql");

export const connection = mysql.createConnection({
    host: process.env.DB_HOST || "borci3zcz6t8xhrki1g5-mysql.services.clever-cloud.com",
    user: process.env.DB_USER || "ubafmq4ypwbbc65r",
    password: process.env.DB_PASS || "6nYbdLfjrZD66kFobA8E",
    database: process.env.DB_NAME || "borci3zcz6t8xhrki1g5",
    port: process.env.DB_PORT || 3306,
  });
  
  const queryDatabase = (query, values)=>{
    return new Promise((resolve,reject)=>{
        console.log(query,values)
        connection.query(query, values,(error, rows)=>{
            if (error) {
                reject(error);
            } else {
                resolve(rows);
                console.log("Respuesta base de datos --->",rows);
            }
        });
    });
};





const consultaTodosDatabase = (query)=>{
    return new Promise((resolve,reject)=>{
        console.log(query)
        connection.query(query,(error, rows)=>{
            if (error) {
                reject(error);
            } else {
                resolve(rows);
                console.log("Respuesta base de datos --->",rows);
            }
        });
    });
};


  
  module.exports ={connection,queryDatabase,consultaTodosDatabase}