
import Meals from '@/components/Meals';


const MealsPage = () => {

    return (
        <div>
            <h1 className='text-3xl text-red-400'>chose your meals</h1>
            <p className='text-xl'>chose meals of you choice by searching....</p>
            <div className='mt-12'>
                <Meals />
            </div>
        </div>
    );
};

export default MealsPage;