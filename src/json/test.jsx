import React, { useEffect } from 'react';

const test = () => {
  const x =  useEffect(()=>{
        fetch("./test.jsx")
    },[])
    return (
        <div>
            
        </div>
    );
};

export default test;