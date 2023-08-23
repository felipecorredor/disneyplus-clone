import React, { useEffect } from "react";

import { styled } from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import MovieList from "./MovieList";
import { useDispatch, useSelector } from "react-redux";

import { setMovies } from "../features/movie/movieSlice";

import db, { collection, getDocs } from "../firebase";

const Home = () => {
  const dispatch = useDispatch();

  const movieLists = [
    {
      title: "Recommend for you",
      movies: useSelector((state) => state.movie.recommend),
    },
    {
      title: "New to Disney+",
      movies: useSelector((state) => state.movie.newDisney),
    },
    {
      title: "Originals",
      movies: useSelector((state) => state.movie.original),
    },
    {
      title: "Trending",
      movies: useSelector((state) => state.movie.trending),
    },
  ];

  useEffect(() => {
    const getMovies = async () => {
      const movieDataByType = {
        recommend: [],
        newDisney: [],
        original: [],
        trending: [],
      };

      const querySnapshot = await getDocs(collection(db, "movies"));

      querySnapshot.forEach((doc) => {
        const movieData = { id: doc.id, ...doc.data() };
        const type = movieData.type;

        if (movieDataByType[type]) {
          movieDataByType[type].push(movieData);
        }
      });

      dispatch(setMovies(movieDataByType));
    };

    getMovies();
  }, [dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      {movieLists.map(({ title, movies }) => (
        <MovieList key={title} title={title} movies={movies} />
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
