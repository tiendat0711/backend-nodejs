const connection = require('../config/database');
const { getAllUser, getUserById, getUpdateUserById, getDeleteUserById } = require('../services/CRUDService');
const getHomepage = async (req, res) => {
    let results = await getAllUser();
    return res.render('homePage.ejs', { listUsers: results });
}
const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body;
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [name, email, city]);
    console.log("check resuls", results);

}



const getCreatePage = (req, res) => {
    return res.render('create.ejs')
}
const getUpdatePage = async (req, res) => {
    let userId = req.params.id;
    let user = await getUserById(userId);
    return res.render('edit.ejs', { userEdit: user })
}


const postUpdateUser = async (req, res) => {
    let { email, name, city, userId } = req.body;
    console.log(req.body);
    await getUpdateUserById(email, name, city, userId);

    res.redirect('/');
}

const getDeletePage = async (req, res) => {
    let userId = req.params.id;
    let user = await getUserById(userId);
    console.log("delete page")
    return res.render("delete.ejs", { userEdit: user });
}
const postDeleteUser = async (req, res) => {
    console.log(req.body)
    const [results, fields] = await connection.query('delete from Users where id=?', [req.body.userId]);
    let check = results && results.length > 0 ? true : false;
    res.redirect('/');
}
module.exports = {
    getHomepage,
    postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, getDeletePage
}