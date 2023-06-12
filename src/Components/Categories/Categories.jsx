import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import Loading from '../../SharedComponents/Loading/Loading';
import { Link } from 'react-router-dom';

const Categories = () => {
    const {data:categories=[], isLoading, refetch} = useQuery({
         queryKey: ['categories'],
          queryFn: ()=> fetch(`http://localhost:7000/categories`).then(res=>res.json()) })
if(isLoading){
    return <Loading/>
}
    return (
        <div className='container text-black'>
            <h2 className='text-2xl font-semibold'>Browse Categories</h2>
            <div className='flex items-center gap-5 py-6'>
                {
                    categories.map(category=> <div key={category._id}>
                      <Link to={`/category/${category.category}`}>
                      <img className='w-96 h-60 border rounded-md' src={category.img} alt="" />
                      </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;