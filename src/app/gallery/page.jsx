import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='min-h-screen px-12 py-24'>
            <h6 className='text-3xl mb-12 text-center'>
Gallery page
            </h6>
            <div>
            <Image src="/images/1.jpg.jpeg" alt="" height="1080" width="1920" />
            </div>
        </div>
    );
};

export default page;