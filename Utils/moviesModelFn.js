const fs = require('fs')


exports.getMovies =()=>{
    const jsonData = fs.readFileSync("./Utils/movies.json")
    return JSON.parse(jsonData)
}

exports.saveMovieData =(data)=>{
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync("./Utils/movies.json",stringifyData)
}