import React from "react";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Ui/Pagination";
import VideoGrid from "../components/VideoGrid/VideoGrid";

const Home = () => {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;
