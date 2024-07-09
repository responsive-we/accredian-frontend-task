import React from 'react'
import { Button } from '@/components/ui/button';
import { FaHeadset } from 'react-icons/fa';

const Support = () => {
  return (
    <div className="bg-primary p-10 rounded-lg flex justify-between items-center text-white">
    <div className="flex items-center">
      <div className="bg-white p-2 rounded-full text-primary">
        <FaHeadset size={32} />
      </div>
      <div className="ml-4">
        <h2 className="text-xl font-bold">Want to delve deeper into the program?</h2>
        <p>Share your details to receive expert insights from our program team!</p>
      </div>
    </div>
    <Button variant="outline" className="py-2 px-4 rounded-lg text-primary">
      Get in touch &gt;
    </Button>
  </div>
  )
}

export default Support