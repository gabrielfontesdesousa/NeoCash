import React, { ReactNode } from "react";
import BackgroundHomeContainer from "../../../../public/assets/BackgroundHome.svg";
type Props = {
  children: ReactNode;
};
export default function ContainerHome({ children }: Props) {
  return (
    <div
      className="w-full h-[100vh] flex bg-black flex-col"
      style={{
        backgroundImage: `url(${BackgroundHomeContainer.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
}
