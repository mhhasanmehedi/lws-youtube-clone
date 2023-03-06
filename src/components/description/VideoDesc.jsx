import React from "react";
import LikeUnlike from "./LikeUnlike";

const VideoDesc = ({ video }) => {
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {video.title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {video.date}
        </h2>

        {/* <!-- like/unlike --> */}
        <LikeUnlike like={video.likes} unlike={video.unlikes} />
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {video.description}
      </div>
    </div>
  );
};

export default VideoDesc;
