import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";


const Tag = () => {
  const [tag, setTag] = useState("Car");
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);


  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   console.log(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif(tag);


  return (
    <div className="w-1/2 bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
      {
        loading ? (<Spinner />) : (<img src= {gif} alt="Gif" width="450" />)
      }

      <input type="text" className="md:w-4/5 w-2/3 text-center rounded-md border border-gray-300 px-3 py-2 focus:z-10 text-sm lg:text-lg"
      onChange={(event) => setTag(event.target.value)} value={tag} />

      <button
        onClick={() => fetchData(tag)}
        className="uppercase w-4/5 py-2 bg-white/70 rounded-lg my-2 hover:bg-white transition-all font-semibold text-center"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
