import React from "react";
import {useParams} from "react-router-dom";
import {moviesService} from "../../services";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";


export const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const {id} = useParams()

  const getMovieDetails = async () => {
    try{
      setIsLoading(true)
      const data = await moviesService.getMoviesDetailsById(id)
      setFilmDetails(data)
      toast.success('Data loaded', {position:'bottom-center'})
    } catch (e) {
      console.error(e)
      toast.error('error occurred')
    } finally {
      setIsLoading(false)
    }

  }

  useEffect(() => {
    getMovieDetails()
  },[])

  if ((isLoading && !filmDetails) || isLoading === null) {
    return <div>is loading...</div>
  }

  return (
    <div>

        <div>
          <div>
            <img src={`https://image.tmdb.org/t/p/w200${filmDetails.poster_path}`} alt={`${filmDetails.original_title} poster`}/>
          </div>
          <h1>{filmDetails.original_title}</h1>
          <h2>{filmDetails.genres.map(el => <span key={el.id}> {el.name} </span>)}</h2>
          <h3>{filmDetails.tagline}</h3>
          <p>{filmDetails.overview}</p>
        </div>





    </div>
  )
}