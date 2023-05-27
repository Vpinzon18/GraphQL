const {gql} = require('apollo-server');

// schema 
const typeDefs = gql`

type Usuario {
    id: ID 
    nombre: String 
    apellido: String 
    email: String 
    creado: String

}

input Usuarioinput{
    nombre: String!
    apellido: String!
    email: String!
    pasword: String!

}

type Query {
    obtenerCurso: String
}

type Mutation {
        nuevoUsuario(input: Usuarioinput): Usuario
}

`;

module.exports = typeDefs;