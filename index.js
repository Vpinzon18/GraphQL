const {ApolloServer} = require('apollo-server');
const controller = {}
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { connection } = require('mongoose');
// conectar a la base de datos 

controller.index = async (req, res) => {
    try {
        const title = 'index desde servidor con una variable '
        await connection()
        alert('Conectao')
        res.render('index.js', {title})}
        catch(err){
                console.log(err)
        }
}
// Servidor
const server = new  ApolloServer({
    typeDefs,
    resolvers
});

// arrancar servidor
server.listen().then(({url}) => {
    console.log(`Servidor listo en la URL ${url}`)
})