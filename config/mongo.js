const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        mongoose.connect(process.env.DB_URI);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = dbConnect;

// melhora a legibilidade do código e a manutenção do mesmo.