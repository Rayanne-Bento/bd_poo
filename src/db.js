let Sequelize = require('sequelize');
let db = new Sequelize(
    'postgres://ujogkxyjqfiofu:2dcc0ebd95aff2302b7bb43d011e99f3b0c9b7480b307bc3d76f2bdc59ffe7a3@ec2-52-203-27-62.compute-1.amazonaws.com:5432/d5kelhopplhvi0',
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
            }
        }
    }
);
module.exports = db;