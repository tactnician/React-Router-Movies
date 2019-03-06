import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = props => {
  return(
    <Link to={`/movies/${props.movie.id}`}>
    <div className="movie-card">
      <h2>{props.movie.title}</h2>
      <div className="movie-director">
        Director: <em>{props.movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    </Link>
  );
};

export default MovieCard;


// function MovieDetails({ movie }) {
//   const { title, director, metascore, stars } = movie;
//   return (
//     <Link to='/movies/:id'>
//     <div className="movie-card">
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//       <h3>Actors</h3>

//       {stars.map(star => (
//         <div key={star} className="movie-star">
//           {star}
//         </div>
//       ))}
//     </div>
//     </Link>
//   );
// }

//Tips and Tricks
//multicusor 
// multiline cursor 
// move whole line hold alt
