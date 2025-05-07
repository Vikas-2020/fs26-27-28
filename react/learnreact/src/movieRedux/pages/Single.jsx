import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleData } from "../slices/movieSlice";
import { IMG_BASE_PATH } from "../data";

function Single() {
  const pathname = window.location.pathname;
  const pathArr = useMemo(() => pathname.split("/").slice(1), [pathname]);
  const dispatch = useDispatch();
  const { singleMovie, loading } = useSelector((state) => state.movieReducer);

  console.log(singleMovie);

  useEffect(() => {
    if (pathArr.length > 0) dispatch(fetchSingleData(pathArr));
  }, [dispatch, pathArr]);

  if (loading || !singleMovie) {
    return <div className="text-white text-center">Loading...</div>;
  }

  const {
    poster_path,
    title,
    genres,
    vote_average,
    overview,
    release_date,
    credits,
  } = singleMovie;

  return (
    <div className="text-white px-14 py-8">
      <div className="flex gap-8 mb-12">
        {/* LEFT SIDE */}
        <div className="w-1/3">
          <img
            src={`${IMG_BASE_PATH}${poster_path}`}
            alt={title}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side */}
        <div className="w-2/3">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-2">
            <strong>Genres:</strong> {genres.map((g) => g.name).join(", ")}
          </p>
          <p className="text-lg mb-2">
            <strong>Rating:</strong> {vote_average.toFixed(1)} / 10
          </p>
          <p className="text-lg mb-2">
            <strong>Release Date:</strong> {release_date}
          </p>
          <p className="text-lg">
            <strong>Overview:</strong> {overview}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">Top Cast</h2>
        <div className="flex gap-6 flex-wrap">
          {credits?.cast?.map((actor) => (
            <div key={actor.id} className="text-center w-24">
              <img
                src={`${IMG_BASE_PATH}${actor.profile_path}`}
                alt={actor.name}
                className="w-24 h-24 rounded-full object-cover mb-2"
              />
              <p className="text-sm font-medium">{actor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Single;
