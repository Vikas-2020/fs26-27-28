import Hero from "../components/Hero";
import Row from "../components/Row";
import { URLs } from "../data";

function Home() {
  return (
    <>
      <Hero />
      <Row
        heading="Trending"
        tab={["day", "week"]}
        url={[URLs.trendingByDay, URLs.trendingByWeek]}
      />
      <Row
        heading="What's Popular"
        tab={["movies", "TV shows"]}
        url={[URLs.popularMovie, URLs.popularTV]}
      />
    </>
  );
}

export default Home;
