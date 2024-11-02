const Error = () => {
  return (
    <div className="gap-5 h-screen flex flex-col items-center justify-center">
      <div>
        <img className="w-20 h-20" src="/public/error-warning.gif" alt="" />
      </div>
      <h1 className="text-3xl font-bold">Sorry, No page found!!</h1>
    </div>
  );
};

export default Error;
