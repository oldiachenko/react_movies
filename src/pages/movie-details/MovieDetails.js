import React from "react";
import {useParams, useRouteMatch} from "react-router-dom";


export const MovieDetails = () => {
  const {params:{id}} = useRouteMatch()
  const params = useParams()
  console.log(params);
  console.log(id);
  return (
    <div>
      hello
    </div>
  )
}