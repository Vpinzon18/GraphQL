const mongoose = require('mongoose');
const password = 'Spinzon2025*'
const bdname = 'CRMGRAPHQL'
const uri = `mongodb+srv://vpinzonsatizabal:${password}@cluster0.vene1rx.mongodb.net/${bdname}mongodb+srv:
retryWrites=true&w=majority`;

// const conectarBD = () => {
//     mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true })
// }


module.exports = () => { mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true })
};