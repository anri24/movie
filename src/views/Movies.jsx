import MovieItem from "../components/MovieItem"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MOVIES } from '../../data';
import 'swiper/css/autoplay';
import MainFilter from "../components/MainFilter";
import { useEffect, useState } from "react";
import axiosClient from "../axios-clinet";


function Movies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axiosClient.get('/movies')
        .then(({data}) => {
            setMovies(data.data);
        })
    })


    return (
        <div className="w-[90vw] md:w-[70vw] mx-auto ">
            <MainFilter />
            <div className="w-full flex justify-start gap-5 flex-wrap mt-20 ">
            {movies.map(movie => <MovieItem key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Movies
