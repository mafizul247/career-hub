import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='space-y-2 mb-8 text-center md:w-3/4 mx-auto'>
            {heading && <h2 className='text-xl md:text-3xl font-bold'>{heading}</h2>}
            {subHeading && <p className='text-slate-600'>{subHeading}</p>}
        </div>
    );
};

export default SectionTitle;