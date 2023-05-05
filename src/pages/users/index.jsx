import Layout from "@/layout/Layout";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const TOKEN =
    "4aa412b63e2b0bb68572772922bd789847b7a0c3215857558195eeb40fe4e93c";

  const getUsers = async () => {
    await axios.get("https://gorest.co.in/public/v2/users").then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  function Delete(id) {
    axios
      .delete(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        toast.success("User has been deleted!", {});
        getUsers();
      })
      .catch((error) => {});
  }

  return (
    <Layout>
      <div className="max-w-[1240px] mx-auto mt-24 px-4">
        <h1 className="text-center font-bold text-4xl text-gray-700 mb-8">
          List User
        </h1>
        <div className="flex justify-between my-2">
          <Link
            href={"/users/store"}
            className="bg-blue-400 text-white px-4 py-2 font-bold rounded-md"
          >
            Create
          </Link>
          <input
            type="search"
            id="default-search"
            class="block w-[300px] md:w-[450px] p-3 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search here ..."
            required
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Gender
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.name}
                  </th>
                  <td class="px-6 py-4">{user.email}</td>
                  <td class="px-6 py-4">{user.gender}</td>
                  <td className="flex gap-4 py-4 px-2">
                    <Link href={"/users/update/" + user.id}>Edit</Link>
                    <button onClick={() => Delete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
