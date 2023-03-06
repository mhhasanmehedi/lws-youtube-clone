import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTagsAsync } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTagsAsync());
  }, [dispatch]);

  console.log(tags);

  return tags?.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map((tag) => (
          <Tag tag={tag} key={tag.id} />
        ))}
      </div>
    </section>
  ) : null;
};

export default Tags;
