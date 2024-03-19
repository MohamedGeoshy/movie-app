import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./src/pages/home";
import Movie from "./src/pages/movie";
import TvSeries from "./src/pages/tv-series";
import Bookmark from "./src/pages/bookmark";
import ErrorBoundary from "./src/pages/error";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/"  element={<Home />} errorElement={<ErrorBoundary />} />
  
      <Route path="/movies"  element={<Movie />} errorElement={<ErrorBoundary />} />
  
      <Route path="/tv-series"  element={<TvSeries />} errorElement={<ErrorBoundary />} />
  
      <Route path="/bookmarks"  element={<Bookmark />} errorElement={<ErrorBoundary />} />
    </>
  )
);
  