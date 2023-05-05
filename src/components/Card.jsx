import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Card = ({ posts }) => {
  const [users, setUsers] = useState([]);

  const listUsers = async () => {
    await axios.get("https://gorest.co.in/public/v2/users").then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    listUsers();
  }, []);

  return (
    <>
      {posts.map((item) => {
        let bodyText = item.body.split(" ").slice(0, 15).join(" ");
        if (item.body.split(" ").length > 15) {
          bodyText += "....";
        }
        return (
          <div
            key={item.id}
            class="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
          >
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify pb-10">
              {bodyText}
            </p>

            <div class="absolute bottom-0 left-0 w-full justify-between flex dark:bg-gray-800 dark:border-gray-700 p-4 rounded-b-lg">
              <span className=" text-white">
                Posted By{" "}
                {users.find((user) => item.user_id === user.id)
                  ? users.find((user) => item.user_id === user.id).name
                  : "Unknown"}
              </span>
              <Link
                href={`/detail-post/${item.id}`}
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;