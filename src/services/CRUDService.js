const connection = require("../config/database");

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body;
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [name, email, city]);

    return results;
}

const getAllUser = async () => {
    const [results, fields] = await connection.query('select * from Users');
    return results;
}

const getUserById = async (userId) => {
    const [results, fields] = await connection.query('select * from Users where id=?', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const getUpdateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(
        `update Users 
         set email = ? , name = ? , city = ? 
         where id = ?
        `, [email, name, city, userId]
    );


}

const getDeleteUserById = async (userId) => {
    const [results, fields] = await connection.query('delete from Users where id=?', [userId]);
    let check = results && results.length > 0 ? true : false;
    return check;
}
module.exports = {
    getAllUser, getUserById, getUpdateUserById, postCreateUser, getDeleteUserById
}