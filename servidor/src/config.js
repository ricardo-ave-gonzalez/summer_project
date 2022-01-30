export default {
    database: {
        connectionLimit: 10,
        host: process.env.DATABASE_HOST || 'localhost',
        user: process.env.DATABASE_USER || 'root',
        passowrd: process.env.DATABASE_PASSWORD || '',
        database: process.env.DATABASE_NAME || 'summerproyect'
    },
    port: process.env.PORT || 4000
}