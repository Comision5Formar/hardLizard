const index = require('./src/index')


module.exports = function(req,res){
    switch (req.url) {
        case '/':
            //se va acceder al HomePage
            index.homePage(req,res)
            break;
    
        case '/en-cartelera':
            //se va aceder a la cartelera
            index.enCartelera(req,res)
            break
        default:
            break;
    }

}
