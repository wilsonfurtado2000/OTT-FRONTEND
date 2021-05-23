const API_KEY="2bab94c4324752cf8e16de5eb59bef0c";

const requests ={
    fetchTrending:`trending/all/day?api_key=2bab94c4324752cf8e16de5eb59bef0c`,
    fetchNetflixOriginals:`/discover/movie?api_key=${API_KEY}with_genres=28`,
    fetchTopRated:`/discover/movie?api_key=2bab94c4324752cf8e16de5eb59bef0c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    fetchActionMovies:`/discover/movie?api_key=2bab94c4324752cf8e16de5eb59bef0c&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=2bab94c4324752cf8e16de5eb59bef0c&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=2bab94c4324752cf8e16de5eb59bef0c&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=2bab94c4324752cf8e16de5eb59bef0c&with_genres=10749`,
}
export default requests;