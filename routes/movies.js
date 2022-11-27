const express=require('express')
const router=express.Router()
const {getAllMovies,getMovieById}=require('../controllers/movie')

router.route('/').get(getAllMovies)
router.route('/id').get(getMovieById)

module.exports=router