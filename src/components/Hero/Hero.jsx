import heroImage from "/books.jpg";

const Hero = () => {
  return (
    <div className="hero bg-[#1313130D] rounded-[24px] font-playFair mb-24">
      <div className="hero-content flex-col lg:flex-row-reverse my-10">
        <img className="w-96 h-96 rounded-[24px]" src={heroImage} />
        <div>
          <h1 className="text-5xl font-bold text-text w-3/5">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn bg-greeny text-xl font-bold text-white mt-12">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
