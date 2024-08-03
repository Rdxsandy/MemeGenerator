import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=lxhLJHcrVlprnfMM3ZT2v4BVuQCVOPap&tag=${tag}`;

    try {
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error("Error fetching the GIF:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (tag) {
      fetchData();
    }
  }, [tag]);

  function clickHandler() {
    fetchData();
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div
      className="w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="text-2xl font-bold underline">Random Gifs</h1>

      {loading ? <Spinner /> : <img src={gif} alt="Random Gif" width="450" />}

      <input
        type="text"
        value={tag}
        onChange={changeHandler}
        placeholder="Enter a tag"
        className="w-10/12 text-lg font-bold rounded-lg mb-[3px] text-center"
      />

      <button
        onClick={clickHandler}
        className="w-10/12 text-lg font-bold bg-yellow-500 rounded-lg"
      >
        Generate Gif
      </button>
    </div>
  );
};

export default Tag;
