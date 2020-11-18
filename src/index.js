const homePage = require('./homePage');


module.exports = {
    homePage : function(req,res){
        //voy a mostrar la informacion (yo no la proceso)
        res.write(`Total de Peliculas: ${homePage.leerJSON().total_movies} \n\n`)
        let movies = homePage.leerJSON()
        movies.movies.forEach(movie => {
           res.write(movie.title + '\n')
        })
        res.end()
    },
    enCartelera : function(req,res){

    }
}