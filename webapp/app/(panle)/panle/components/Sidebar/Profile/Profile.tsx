import PopoverLayout from '@/components/Popeover/Popover'
import React from 'react'

function Profile() {
  return (
    <div className='flex items-center'>
        <div className='w-8 h-8 rounded-full bg-amber-100'></div>
        <PopoverLayout label='جواد بروجی'>
            <div className='flex flex-col gap-2'>
                <div className='text-xs text-gray-500'>جواد بروجی</div>
                <div className='text-xs text-gray-500'>09123456789</div>
            </div>
                      
        </PopoverLayout>
    </div>
  )
}

export default Profile