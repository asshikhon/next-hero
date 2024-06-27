import React from 'react';

const page = ({params}) => {
    console.log(params.id);
    return (
        <div>
            postDetails of {params.id}
        </div>
    );
};

export default page;