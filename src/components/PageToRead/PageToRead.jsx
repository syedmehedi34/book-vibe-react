import { useLoaderData } from "react-router-dom";

const PageToRead = () => {
  const allBooks = useLoaderData();
  console.log(allBooks);

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h1>Page to read </h1>
    </div>
  );
};

export default PageToRead;
