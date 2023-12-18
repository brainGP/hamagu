"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <>
      <div className="justify-center w-full h-screen flex flex-col items-center z-10 relative">
        <div className="w-[40%] h-auto p-4 mx-2.5 flex flex-col justify-between text-white bg-black bg-opacity-75 rounded-lg shadow-lg shadow-green-400">
          <div className="flex justify-between m-8">
            <Link
              href="/"
              className="font-bold text-3xl text-alien  text-white  cursor-pointer  hover:text-green-400 "
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="font-bold text-3xl text-alien text-green-400 cursor-pointer underline underline-offset-8 "
            >
              Sign Up
            </Link>
          </div>

          <p className="font-medium max-w text-center mb-8">
            I hope you have a great day.
            <br /> Thank you for visiting my website. Best regards, Bat-orgil
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="m-auto flex flex-col gap-2.5 ">
              <div className="w-full p-1 pl-3 m-auto flex items-center justify-center border rounded-md  hover:border-green-400">
                <hr className="w-8 h-px rotate-90" />
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  className="w-11/12 h-10 bg-transparent outline-none bg-none"
                />
              </div>
            </div>
            <div className="m-auto flex flex-col gap-2.5 ">
              <div className="w-full p-1 pl-3 m-auto flex items-center justify-center border rounded-md  hover:border-green-400">
                <hr className="w-8 h-px rotate-90" />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                  className="w-11/12 h-10 bg-transparent outline-none bg-none"
                />
              </div>
            </div>

            <div className="m-auto flex flex-col gap-2.5">
              <div className="w-full p-1 pl-3 m-auto flex items-center justify-center border border-zinc-300 rounded-md hover:border-green-400">
                <hr className="w-8 h-px rotate-90" />

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="w-11/12 h-10 bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="h-auto w-full flex justify-center">
              <button className="w-[245px] h-[50px] cursor-pointer bg-green-400 hover:bg-green-500 rounded-md flex justify-center items-center">
                Sign Up
              </button>
            </div>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
          </form>
        </div>
        <footer className="w-full absolute bottom-0 pt-2">
          <div className="w-full flex justify-between items-center my-1.5">
            <div className="w-full h-px bg-green-400 shadow-md shadow-green-400"></div>

            <div className="w-64 mx-1 text-center font-normal text-sm text-white bg-transparent">
              Connect with
            </div>

            <div className="w-full h-px bg-green-400 shadow-xl shadow-green-400 "></div>
          </div>

          <div className="flex justify-center">
            <img
              src="./fb.png"
              alt="icon for login in facebook"
              className="w-10 p-1.5"
            />
            <img
              src="./google.svg"
              alt="icon for login in google"
              className="w-10 p-1.5"
            />
          </div>
        </footer>
      </div>

      <video
        muted
        autoPlay
        loop
        src="./song.mp4"
        className="w-full h-screen object-cover absolute top-0 z-0"
      ></video>
    </>
  );
}
