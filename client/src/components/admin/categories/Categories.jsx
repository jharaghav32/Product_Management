import React from 'react'
import CategoriesTable from './CategoriesTable'

const Categories = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Categories</h1>
        <button >
              Add New
        </button>
     </div>
     <CategoriesTable />
        </div>
        </div>
  )
}

export default Categories