import React from 'react'
import CategoriesRow from './CategoriesRow'

const CategoriesTable = () => {
  return (
    <div>
      <div className="flex items-center py-4">
        <input placeholder="Search" className="max-w-sm" />
        </div>
        <div className="rounded-md border">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Billiboard
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <CategoriesRow />
                </tbody>
            </table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
            <button variant="outline" size="sm">
                Previous

            </button>
            <button variant="outline" size="sm">
                Next
            </button>
        </div>
    </div>



  )
}

export default CategoriesTable