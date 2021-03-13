import React from 'react';
import TopBar from './TopBar';

interface Props {
     children:React.ReactNode 
    };

function Layout (props: Props) {
 
    const {children} = props;

    return (
    <>
      <TopBar />
      <main style={{ marginTop: '80px' }}>{children}</main>
    </>
  );
}

export default Layout;


