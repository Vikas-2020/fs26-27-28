import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../slices/movieSlice";
import { useEffect, useState } from "react";
import { IMG_BASE_PATH } from "../data";
import { Link } from "react-router-dom";
let copy = [];

function Row({ heading, tab, url }) {
  const dispatch = useDispatch();
  const initState = useSelector((state) => state.movieReducer);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [movieArr, setMovieArr] = useState([]);

  useEffect(() => {
    dispatch(fetchData(url));
  }, [dispatch, url]);

  useEffect(() => {
    if (initState.movies.length > 0) {
      setMovieArr(initState.movies.map((obj) => obj.results));
    }
  }, [initState.movies]);
  console.log(movieArr);

  console.log(initState.movies);
  copy = [...movieArr];

  return (
    <section className="row px-14 text-white">
      <header className="flex justify-between items-center mb-8">
        <h2>{heading}</h2>
        <div className="toggler">
          <button className="capitalize" onClick={() => setDisplayedIndex(0)}>
            {tab[0]}
          </button>
          <button className="capitalize" onClick={() => setDisplayedIndex(1)}>
            {tab[1]}
          </button>
        </div>
      </header>

      <div className="carousel flex flex-wrap gap-3">
        {copy?.length > 0 &&
          copy[displayedIndex].map((obj) => {
            return (
              <div key={obj.id} className="card w-1/5">
                <div className="image-container">
                  <Link
                    to={
                      displayedIndex === 0
                        ? `/movie/${obj.id}`
                        : `/tv/${obj.id}`
                    }
                  >
                    <img src={IMG_BASE_PATH + obj.poster_path} alt="" />
                  </Link>
                </div>
                <div className="info">
                  <h3></h3>
                  <p className="release-date"></p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Row;
