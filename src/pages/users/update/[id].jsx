import Layout from "@/layout/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditUser = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState({});
  const TOKEN =
    "4aa412b63e2b0bb68572772922bd789847b7a0c3215857558195eeb40fe4e93c";

  const getUser = () => {
    axios
      .get(`https://gorest.co.in/public/v2/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `https://gorest.co.in/public/v2/users/${id}`,
        {
          name: user.name,
          email: user.email,
          gender: user.gender,
          status: user.status,
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      toast.success("User has been updated!", {
        onClose: () => {
          router.push("/users");
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Layout>
      <div className="mt-24 flex w-full">
        <h1 className="text-center text-4xl mx-auto font-bold">
          Form Update User
        </h1>
      </div>
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8 mx-auto">
        <form onSubmit={handleSubmit}>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              value={user.name}
              onChange={(event) =>
                setUser({ ...user, name: event.target.value })
              }
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
              Gender
            </label>
            <div class="flex gap-3 mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="gender"
                    value="male"
                    checked={user.gender === "male"}
                    onChange={(event) =>
                      setUser({ ...user, gender: event.target.value })
                    }
                  />
                  <span class="ml-2 text-gray-500 dark:text-gray-400">
                    Male
                  </span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="gender"
                    value="female"
                    checked={user.gender === "female"}
                    onChange={(event) =>
                      setUser({ ...user, gender: event.target.value })
                    }
                  />
                  <span class="ml-2 text-gray-500 dark:text-gray-400">
                    Female
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label class="block text-sm font-medium text-gray-500 dark:text-gray-400">
              Status
            </label>
            <div class="flex gap-3 mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="status"
                    value="active"
                    checked={user.status === "active"}
                    onChange={(event) =>
                      setUser({ ...user, status: event.target.value })
                    }
                  />
                  <span class="ml-2 text-gray-500 dark:text-gray-400">
                    Active
                  </span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="status"
                    value="inactive"
                    checked={user.status === "inactive"}
                    onChange={(event) =>
                      setUser({ ...user, status: event.target.value })
                    }
                  />
                  <span class="ml-2 text-gray-500 dark:text-gray-400">
                    Inactive
                  </span>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default EditUser;
