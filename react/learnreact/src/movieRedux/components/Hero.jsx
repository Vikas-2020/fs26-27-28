function Hero() {
  return (
    // svh, lvh, dvh: Kewin Powell
    <>
      <div className="hero min-h-[90dvh] flex justify-center items-center text-white">
        <div className="max-w-[800px] flex flex-col justify-center items-center">
          <h1 className="text-[90px] font-bold leading-24">Welcome.</h1>
          <p className="text-2xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className="flex items-center w-full searchInput mt-6">
            <input
              className="w-[80%] h-[60px] rounded-tl-4xl rounded-bl-4xl px-6 bg-white text-black outline-0"
              type="text"
              placeholder="Search for a movie or a TV show"
            />

            <button className="w-[20%] h-[60px] rounded-tr-4xl rounded-br-4xl bg-linear-[98.37deg,#f89e00_.99%,#da2f68_100%] outline-0">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
