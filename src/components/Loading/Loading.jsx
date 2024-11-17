import React from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
    return <div className='flex items-center justify-center' style={{ minHeight: '80vh' }}>
        {/* <div className=" flex justify-center items-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
</div> */}
        <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
            <svg className="h-28 w-28 animate-spin stroke-gray-700" viewBox="0 0 256 256">
                <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="24"></line>
                <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                </line>
                <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="24"></line>
                <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                </line>
                <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="24"></line>
                <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                </line>
            </svg>
            <span className="text-5xl font-medium text-gray-600">Loading...</span>
        </div>
    </div>
};

export default Loading;