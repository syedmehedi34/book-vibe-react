import Books from "../Books/Books";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto mt-7">
      <Hero></Hero>
      <Books></Books>
    </div>
  );
};

export default Home;
