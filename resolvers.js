const { Error } = require("mongoose");

// resolvers
const resolvers = {
    Query:{
       obtenerCurso: () => "sofi"
    },

    Mutation:{
        nuevoUsuario: async (_, {input}) => {

            const {email, password} = input;

            // revisar si el usuario esta registrado    
            const existeUsuario = await Usuario.findOne({email});
            console.log(existeUsuario);
            if (existeUsuario) {
                throw new Error('El usuario ya existe en la base de datos');
            }
            // hashear su password 

            try {
                
                const usuario = new Usuario(input);
                usuario.save(); // guardado
                return usuario;
            }catch(error){
                console.log(error);}
            

            // Guardalo en la base de datos 




        }

    }
}

module.exports = resolvers;