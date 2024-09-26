import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Pagination () {

   const {page,handlePageChange,totalPages} = useContext(AppContext);

   if (!totalPages) return null;

  return (
    <div className='inset-x-0 border-t-2 fixed bottom-0 bg-white py-2 border-t-gray-300'>
      <div className='flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto'>
      
      { page > 1 && 
          (<button
          className='rounded-md border-2 px-4 py-1 border-gray-300'
           onClick={() => handlePageChange(page-1)}>
            Previous
          </button>)
          
        } 

        { page < totalPages && 
                 (<button
                  className='rounded-md border-2 border-gray-300 px-4 py-1' onClick={() =>handlePageChange(page+1)}>
                 Next 
                </button>) 
        }

      </div>
        
        <p className='font-bold text-sm'>
           Page {page} of {totalPages}
        </p>

      </div>
  
    )
}

