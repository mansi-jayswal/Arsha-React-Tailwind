import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

function LinksListing({ heading, links }) {
  return (
    <div className='flex flex-col gap-3'>
      <div>
        <h1 className='text-primary-color text-base font-bold pl-5'>{heading}</h1>
      </div>
      <div className='flex flex-col gap-2'>
        {
          links.map((link, index) => (
            <div key={index} className='flex items-center'>
              <MdKeyboardArrowRight size={20} className='text-secondary-color' />
              <p className='ml-2 text-sm text-default-color hover:text-secondary-color cursor-pointer'>{link.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default LinksListing
