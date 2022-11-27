

const getAllMovies= async (req,res)=>{
    res.status(200).json({msg:'movies testing route'})
}
const getMovieById= async (req,res)=>{
    console.log(req.params.id)
    res.status(200).json({msg:`movie by id testing route`})
}

module.exports={
    getAllMovies,
    getMovieById
}