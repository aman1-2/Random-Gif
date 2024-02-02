import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   console.log(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 bg-green-500 mx-auto rounded-2xl border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl uppercase underline font-bold">A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} alt="Gif" width="450" />}
      <button
        onClick={() => fetchData()}
        className="uppercase w-4/5 py-2 bg-white/70 rounded-2xl my-2 hover:bg-white transition-all font-semibold text-center"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
