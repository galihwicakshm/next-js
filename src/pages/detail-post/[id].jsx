import Layout from "@/layout/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DetailPost = () => {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const getDetail = async () => {
    await axios
      .get(`https://gorest.co.in/public/v2/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getComments = async () => {
    await axios.get("https://gorest.co.in/public/v2/comments").then((res) => {
      setComments(res.data);
    });
  };

  useEffect(() => {
    getDetail();
    getComments();
  });

  const postComments = comments.filter(
    (comment) => comment.post_id === post.id
  );

  return (
    <Layout>
      <div className="w-full mx-auto mt-24 sm:mt-24">
        <h4 className="text-center mb-5 text-4xl font-bold text-gray-700">
          Details
        </h4>
        <a
          href="#"
          class="block mx-auto max-w-sm sm:max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-xl  text-center font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h5>
          <p class="font-normal pt-4 text-justify dark:text-[#bfc0c0]">
            {post.body}
          </p>
        </a>
        <div className="block mx-auto max-w-sm sm:max-w-lg mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  text-sm">
          <h1 className="text-white font-bold text-2xl">
            {postComments.length} Comments :
          </h1>
          {postComments.map((comment) => (
            <div
              key={comment.id}
              className="flex flex-col px-1py-1 text-justify  text-white my-4 rounded-md"
            >
              <div className=" bg-gray-600 rounded-tl-md rounded-tr-md px-2 py-3">
                <p>{comment.name}</p>
                <p className="text-gray-400">{comment.email}</p>
              </div>
              <div className="bg-white text-black ">
                <p className="py-8 px-2">{comment.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DetailPost;
