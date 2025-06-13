import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function RegisterContainer({ children }: Props) {
  return(
     <div className="bg-black w-1/2 flex align-center justify-center">
        {children}
    </div>
  );
}
