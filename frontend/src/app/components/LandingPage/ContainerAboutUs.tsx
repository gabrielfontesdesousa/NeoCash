import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function ContainerAboutUs ({children}: Props){
    return (
        <>
        {children}
        </>
    );
}
