module.exports = {
    dev:{
        connectionString: 'postgres://devtestdb_user:T2c14Hq82tufYGvcqxo2O2PDN8Mf11GF@dpg-ced23cp4reb438apnsb0-a.ohio-postgres.render.com/devtestdb' + "?ssl=true",
        port: '3001',
    },
    production:{
        connectionString: process.env.POSTGRES_CONNECTION_STRING + "?ssl=true",
        port: process.env.PORT
    }
}