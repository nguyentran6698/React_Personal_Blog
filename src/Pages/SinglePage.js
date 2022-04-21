import React from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { blogId } = useParams();
  return (
    <div>
      <h2>Single Page compoent</h2>
      <p>{blogId}</p>
    </div>
  );
};

export default SinglePage;
