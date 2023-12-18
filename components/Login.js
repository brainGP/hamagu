import Link from "next/link";
import React from "react";
export default function Login() {
  return (
    <div className="w-[40%] h-auto p-4 mx-2.5 flex flex-col justify-between text-white bg-black bg-opacity-75 rounded-lg shadow-lg shadow-green-400">
      <div className="flex justify-between m-8">
        <Link
          href="/"
          className="font-bold text-3xl text-alien text-green-400 cursor-pointer underline underline-offset-8 "
        >
          Login
        </Link>

        <Link
          href={"/register"}
          className="font-bold text-3xl text-alien text-white cursor-pointer hover:text-green-400 "
        >
          Sign Up
        </Link>
      </div>

      <p className="font-medium max-w text-center mb-8">
        I hope you have a great day.
        <br /> Thank you for visiting my website. Best regards, Bat-orgil
      </p>
      <div>
        <form>
          <fieldset className="flex flex-col gap-5">
            <div className="m-auto flex flex-col gap-2.5 ">
              <label className="w-px h-px overflow-hidden -left-[9999px] absolute invisible">
                Email
              </label>
              <div className="w-full p-1 pl-3 m-auto flex items-center justify-center border rounded-md  hover:border-green-400">
                <hr className="w-8 h-px rotate-90" />
                <input
                  id="loginEmail"
                  type="text"
                  name="Email"
                  placeholder="Email"
                  className="w-11/12 h-10 bg-transparent outline-none bg-none"
                />
              </div>
            </div>

            <div className="m-auto flex flex-col gap-2.5">
              <label className="w-px h-px overflow-hidden -left-[9999px] absolute invisible">
                Password
              </label>
              <div className="w-full p-1 pl-3 m-auto flex items-center justify-center border border-zinc-300 rounded-md hover:border-green-400">
                <hr className="w-8 h-px rotate-90" />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-11/12 h-10 bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="h-auto w-full flex justify-center">
              <button className="w-[245px] h-[50px] cursor-pointer bg-green-400 hover:bg-green-500 rounded-md flex justify-center items-center">
                Login
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
