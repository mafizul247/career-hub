import React, { useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                // console.log(data)
            })
    }, [setCategories])

    return (
        <div className='p-4 md:p-10'>
            <SectionTitle heading={'Job Category List'} subHeading={'Explore thousands of job opportunities with all the information you need. Its your future'} />
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    categories?.map(category => <div
                        key={category.id}
                        className='space-y-2 p-2 md:p-6 bg-slate-100 rounded-md flex flex-col items-center hover:bg-orange-200 hover:duration-500'
                    >
                        <img className='h-16' src={category?.logo} alt={category?.category_name} />
                        <h4 className='md:text-xl font-bold text-slate-800'>{category?.category_name}</h4>
                        <p className='text-slate-600'>{category?.availability}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;