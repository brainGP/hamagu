import Login from "@/components/Login";
import Image from "next/image";
const App = () => {
  return (
    <>
      <div className="justify-center w-full h-screen flex flex-col items-center z-10 relative">
        <Login />
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
};

export default App;
