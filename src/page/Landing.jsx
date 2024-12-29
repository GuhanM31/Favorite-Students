import React from 'react';
import { Link } from 'react-router-dom';

function Landing({ addToFavorites }) {
    const students = ['Praveen', 'Bharath', 'Kumar', 'Ramya', 'Monica'];

    return (
        <div className='border border-gray-400 m-20 rounded-md flex-wrap'>
            {/* Header */}
            <div className='bg-[#EB7071] p-16 rounded-t-md flex justify-around'>
                <Link to="/" className='text-white underline md:text-2xl font-bold'>List of Students</Link>
                <Link to="/favorites" className='text-white underline md:text-2xl font-bold'>Favorite Students</Link>
            </div>

            <div className="flex-wrap md:flex flex-col gap-4 px-14 mt-8">
                {students.map((student, index) => (
                    <div key={index} className='flex justify-between flex-wrap p-2'>
                        <h1 className='text-black text-2xl md:mx-60'>{index + 1}. {student}</h1>
                        <button
                            className='text-white bg-black p-2 rounded-md md:mx-60'
                            onClick={() => addToFavorites(student)}
                        >
                            Add to Favorite
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Landing