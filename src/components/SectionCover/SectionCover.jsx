import React from 'react';
import './SectionCover.css'

const SectionCover = ({title}) => {

    return (
        <div className='h-[300px] bg-slate-100 flex flex-col justify-center items-center banner-image'>
            {title && <h3 className='text-xl md:text-2xl font-bold text-purple-600 p-4 text-center'>{title}</h3>}
        </div>
    );
};

export default SectionCover;