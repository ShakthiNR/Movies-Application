const express = require("express")
const { getMovieDetails, createMovieDetails } = require("../Controllers/movies")
const router = express.Router()
const {check} = require("express-validator")

//check the incoming req data
const validateReq = [
    check("moviename").not().isEmpty().withMessage("Movie Name is required"),
    check("rating").not().isEmpty().withMessage("Movie Ratings is required"),
    check("releaseddate").not().isEmpty().withMessage("Movie Released Date is required"),
    check("moviename").isString().withMessage("Movie Name should be string"),
    check("rating").isNumeric().withMessage("Movie Ratings Should be in Number")
]


router.get("/get/movies/",getMovieDetails)
router.post("/create/movie",validateReq,createMovieDetails)


module.exports = router