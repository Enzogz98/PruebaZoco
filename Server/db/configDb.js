import mysql from 'mysql'

export const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "root",
    database: process.env.DB_NAME || "testing",
    port: process.env.DB_PORT || 3306,
  });
  
 export const queryDatabase = (query, values)=>{
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

export const consultaTodosDatabase = (query)=>{
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