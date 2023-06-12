import React, { useEffect } from 'react';

const Categories = () => {
    useEffect(()=>{
        fetch('/categories')
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Categories;