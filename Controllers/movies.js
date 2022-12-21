const { validationResult } = require("express-validator")
const { getMovies, saveMovieData } = require("../Utils/moviesModelFn")

//Get all Movie Details
exports.getMovieDetails =(req,res)=>{
    const moviesData = getMovies()
    return res.status(200).json(moviesData)
}

//Helper function to check the date format
const dateIsValid =(dateStr)=>{
    const regex=/^\d{4}-\d{2}-\d{2}$/
    if(dateStr.match(regex)  === null){
        return false
    }
    const date = new Date(dateStr)
    const timeStamp = date.getTime();
    if(typeof timeStamp !=="number" || Number.isNaN(timeStamp)){
        return false
    }
    return true

}

//Create a Movie Detail
exports.createMovieDetails =(req,res)=>{

 //check for errors in express validator
   const errors = validationResult(req);
   if(!errors.isEmpty()){
    return res.status(422).json({error:errors.array()[0].msg})
   }

   const newMovieData = req.body;

   //validate date format
   const isValidDate =dateIsValid(newMovieData.releaseddate)
   if(!isValidDate){
    return res.status(422).json({msg:"Movie Released Date Format is Invalid"})
   }


   const existMovieData = getMovies();
   //Check if movie already exists
   const findMovie = existMovieData.find(movie => movie.moviename === newMovieData.moviename 
                                        && movie.releasedate === newMovieData.releasedate )
   if(findMovie){
    return res.status(422).json({msg:"Movie Already Exists in dB"})
   }

   

   //created unique id for movie
   newMovieData.id = new Date().getTime()
   existMovieData.push(newMovieData) 
   saveMovieData(existMovieData) //Create A Movie

   return res.status(200).json({msg:"Movie Created Successfully"})

}