import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function ContainerLogin({ children }: Props) {
    return(
        <div className="w-full h-[100vh] flex">
            { children }
        </div>
    );
}
