import axios from "axios";

export const AXIOS = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTRjNDZlNjg1MzBhZmVhZTdkMTE3YzZmYmIxOTYyMCIsInN1YiI6IjVmZmYxOGMwN2Q1ZGI1MDAzYmM5NmMxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LbnVeVaq2wzcYTYS3NSGK8kf_Q6jNH84TlP2gqy7I7U'
  }
})
