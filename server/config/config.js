// =====================
// Config Puerto
// =====================
process.env.PORT = process.env.PORT || 3000;


// =====================
// Entorno
// =====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// =====================
// DataBase
// =====================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://pduran:cnB5g8NMRL9AXXY@cluster0.cfmta.mongodb.net/cafe';
}

process.env.URLDB = urlDB;