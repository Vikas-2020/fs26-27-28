import { useDispatch, useSelector } from "react-redux";
import { fetchData, movieReducer } from "../slices/movieSlice";
import { useEffect } from "react";

function Row({ heading, tab, url }) {
  const dispatch = useDispatch();
  const initState = useSelector((state) => state.movieReducer);

  useEffect(() => {
    dispatch(fetchData(url[0]));
  }, [dispatch, url]);

  console.log(initState.movies);

  return (
    <section className="row px-14 text-white">
      <header className="flex justify-between items-center mb-8">
        <h2>{heading}</h2>
        <div className="toggler">
          <button className="capitalize">{tab[0]}</button>
          <button className="capitalize">{tab[1]}</button>
        </div>
      </header>
    </section>
  );
}

export default Row;
