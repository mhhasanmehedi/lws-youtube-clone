import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoDesc from "../components/description/VideoDesc";
import VideoPlayer from "../components/description/VideoPlayer";
import Loading from "../components/Ui/Loading";
import RelatedVideoList from "../components/VideoList/RelatedVideoList";
import { fetchVideoAsync } from "../features/video/videoSlice";

const Video = () => {
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchVideoAsync(videoId));
  }, [dispatch, videoId]);

  // decide what to render
  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !video?.id)
    content = <div className="col-span-12">No Video Found</div>;

  if (!isLoading && !isError && video?.id)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer link={video.link} title={video.title} />
          <VideoDesc video={video} />
        </div>

        <RelatedVideoList currentVideoId={video.id} tags={video.tags} />
      </div>
    );

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </>
  );
};

export default Video;
