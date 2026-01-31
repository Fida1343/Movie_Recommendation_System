//Movie Recommendation Logic
//Uses content-based similarity on Genre, Rating, and Year
const genreMap={
  "Action": 1,
  "Adventure": 2,
  "Animation": 3,
  "Comedy": 4,
  "Drama": 5,
  "Horror": 6,
  "Romance": 7,
  "Sci-Fi": 8,
  "Thriller": 9
};
function normalizeRating(rating){
  return rating / 10; //Ratings are out of 10
}
function normalizeYear(year){
  return (year - 1980) / (2025 - 1980); //Normalize to 0–1
}
function getFeatureVector(movie){
  return [
    genreMap[movie.genre],
    normalizeRating(movie.rating),
    normalizeYear(movie.year)
  ];
}

function calculateDistance(vec1,vec2){
  let sum=0;
  for(let i=0;i<vec1.length;i++){
    sum+=Math.pow(vec1[i]-vec2[i],2);
  }
  return Math.sqrt(sum);
}
function getRecommendations(selectedMovieTitle){
  const selectedMovie=movies.find(movie => movie.title === selectedMovieTitle);
  if (!selectedMovie)
    return [];

  const selectedVector=getFeatureVector(selectedMovie);
  const distances=movies.filter(movie => movie.title !== selectedMovieTitle).map(movie =>
    {
      return {
        ...movie,
        distance:calculateDistance(selectedVector,getFeatureVector(movie))
      };
    });

  distances.sort((a, b) => a.distance - b.distance);
  return distances.slice(0, 3);
}
