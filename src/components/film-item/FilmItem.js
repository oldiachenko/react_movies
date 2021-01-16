import React from "react";
import styles from './FilmItem.module.css'
export const FilmItem = (props) => {

// adult: false
// backdrop_path: "/srYya1ZlI97Au4jUYAktDe3avyA.jpg"
// genre_ids: (3) [14, 28, 12]
// id: 464052
// original_language: "en"
// original_title: "Wonder Woman 1984"
// overview: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah."
// popularity: 3280.252
// poster_path: "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
// release_date: "2020-12-16"
// title: "Wonder Woman 1984"
// video: false
// vote_average: 7.2
// vote_count: 2685

  const {original_title, overview, release_date, vote_average, vote_count, poster_path, movieGenresList} = props

  return (
    <div className={styles.filmItem}>
      <div className={styles.filmPoster}>
        <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title} poster`}/>
      </div>
      <div>
        <h2>{original_title}</h2>
        <h3>{movieGenresList.map(({name, id}, i) => (
          <span key={id}>{name} {i < movieGenresList.length-1 && '-'} </span>
        ))}</h3>
        <span>Rating: {vote_average} (total votes: {vote_count})</span>
        <p>{overview}</p>
        <span>Release date: {release_date}</span>
      </div>
    </div>
  )
}