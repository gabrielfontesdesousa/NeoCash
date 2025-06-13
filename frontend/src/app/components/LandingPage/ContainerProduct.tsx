import React, { ReactNode } from "react";
import BackgroundProductContainer from "../../../../public/assets/BackgroundProductContainer.svg"
type Props = {
  children: ReactNode;
};
export default function ContainerProduct({ children }: Props) {
  return(
    <div className="w-full h-[100vh] bg-black pt-24"
    style={{
        backgroundImage: `url(${BackgroundProductContainer.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        {children}
    </div>

  );
}
