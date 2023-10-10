import * as mysql from 'mysql2'
import config from "../config";

// user数据库
export const connection = mysql.createConnection(
    Object.assign({ database: 'user' }, config.mysql)
)