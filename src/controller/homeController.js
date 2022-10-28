import connection from '../configs/connectDB';
let getHomepage = (req, res) => {
    // logic
    let data = []; // array
    // simple query
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            results.map((row) => {
                data.push({
                    userID: row.userID,
                    email: row.email,
                    address: row.address,
                    firstName: row.firstName,
                    lastName: row.lastName
                })

            });
            console.log(data);
            return res.render('index.ejs', { dataUser: data, test: 'abc string test' })
        })
}

module.exports = {
    getHomepage
}