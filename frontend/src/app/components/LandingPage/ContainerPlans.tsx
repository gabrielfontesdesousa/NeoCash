import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function ContainerPlans ({children}: Props){
    return (
        <>
        {children}
        </>
    );
}
