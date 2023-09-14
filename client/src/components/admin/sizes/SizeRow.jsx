import React from 'react'

const SizeRow = () => {
  return (
    <tr className="hover:bg-gray-100">
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="flex items-center">
                <div className="ml-4">
                    <div className="text-sm leading-5 font-medium text-gray-900">
                        Size
                    </div>
                    <div className="text-sm leading-5 text-gray-500">
                        Size
                    </div>

                </div>
            </div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="text-sm leading-5 text-gray-900">
                Size
            </div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Size
            </span>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
            Size
        </td>
    </tr>

    
  )
}

export default SizeRow