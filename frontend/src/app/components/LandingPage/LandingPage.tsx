
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function LandingPage ({ children }: Props){
    return (
        <div className="w-full h-full flex flex-col">
            { children }
        </div>
    );
}
