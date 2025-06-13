import React, { ReactNode } from "react";
import BackgroundJourneyContainer from "../../../../public/assets/BackgroundJourneyContainer.svg";
import Navbar from "./Navbar";
type Props = {
  children: ReactNode;
};
export default function JourneyContainer({ children }: Props) {
  return (
    <div className="w-1/2 h-[100vh] pt-5 pl-5 bg-black flex">
      <div
        className="w-[100%] bg-black rounded-[40px]"
        style={{
          backgroundImage: `url(${BackgroundJourneyContainer.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar></Navbar>
        <div className="w-full h-full flex flex-col-reverse items-center pb-20 ">
            {children}
        </div>
      </div>
    </div>
  );
}
