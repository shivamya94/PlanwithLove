import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

   const {page} = useContext(AppContext);

  return (
    <div>
      <div>
        { page > 1 && 
          <button onClick={() => handlePageChange(page-1)}>
            Previous
          </button>
        }

        {
          <button>
              Next 
          </button>

        }
      </div>
    </div>
  )
}

export default Pagination