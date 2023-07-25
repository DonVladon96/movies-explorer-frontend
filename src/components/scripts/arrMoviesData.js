export const arrMoviesData = (movies, saveMovies) => {
  const result = [];

  saveMovies.forEach(item => {
    const card = movies.find(obj => obj.id === item.movieId);

    result.push({...item, id: item.movieId, image: card.image});
  });

  return result;
};
