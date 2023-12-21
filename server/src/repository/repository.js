const db =  require('../config/db.config');

async function getUserByEmail(email){
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];

}
module.exports = {
    getUserByEmail
}