import React from "react";
import {FilmList, PaginationWrapper} from "../../components";
import {genresService, moviesService} from "../../services";
import {useEffect, useState} from "react";
import styles from './Home.module.css'
import {useHistory} from "react-router-dom";



export const Home = () => {
  const history = useHistory()
  const [moviesList, setMoviesList] = useState([])
  const [genresList, setGenresList] = useState([])
  const [isLoading, setIsLoading] = useState(null)
  const [movieData, setMovieData] = useState(null)

  const fetchMovies = async (params) => {
    try {

      const {results, page, total_pages, total_results} = await moviesService.getMovies(params)
      setMovieData({page, total_pages, total_results})

      return results
    } catch (e) {
      console.error(e)
    }

  }

  const fetchGenres = async () => {
    try {

      const {genres} = await genresService.getGenres()
      return genres
    } catch (e) {
      console.error(e)
    }
  }

  const fetchMoviesData = async (movieParams) => {
    const requests = genresList.length ? [fetchMovies(movieParams)] : [fetchMovies(movieParams), fetchGenres()]
    try {
      setIsLoading(true)
      const [movies, genres = genresList] = await Promise.all(requests)

      const mergedWithGenresMovies = movies.map((movie) => {
        const {genre_ids} = movie;
        const movieGenresList = genre_ids.map((genreId) => genres.find(el => el.id === genreId))
        return {
          ...movie,
          movieGenresList
        }
      })

      setMoviesList(mergedWithGenresMovies)
      setGenresList(genres)

    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
      fetchMoviesData()
    }, []
  )

  const renderLoadingIndicator = () => {
    return (
      <div className={styles.loading}>Loading...</div>
    )

  }

  const onFilmClick = (film) => {
    history.push(`/movie/${film.id}`)
  }


  const handlePageChange = (page) => {
    fetchMoviesData({page})
  }

  return (
    <div>
      {isLoading || isLoading === null ? renderLoadingIndicator() : (
        <div>
          <PaginationWrapper
            currentPage={movieData.page}
            totalPages={movieData.total_pages}
            onPrevClick={handlePageChange}
            onNextClick={handlePageChange}
            handleLastPage={handlePageChange}
            handleFirstPage={handlePageChange}
          />
          <FilmList
            items={moviesList}
            onFilmClick={onFilmClick}
          />
        </div>

      )}
    </div>

  )
}