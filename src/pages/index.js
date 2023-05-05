import Layout from "@/layout/Layout";
import Card from "@/components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const getList = async () => {
    await axios.get("https://gorest.co.in/public/v2/posts").then((res) => {
      setPosts(res.data);
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col w-full mt-16 justify-center">
        <h1 className="text-4xl font-bold text-gray-700 text-center mt-12 sm:mt-24">
          List Post
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 mx-auto gap-2 px-6">
          <Card posts={posts} />
        </div>
      </div>
    </Layout>
  );
}
