// src/components/Banner.js

import React, { useState } from 'react';
import banner from '../assets/banner.png';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Toast, ToastProvider, ToastViewport } from "@/components/ui/toast";
import ReferralForm from './ReferralForm';

const Banner = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleFormSuccess = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
  };

  return (
    <div className='shadow-2xl max-w-7xl h-[33em] mx-auto my-8 p-4 rounded-xl flex justify-between items-center'>
      <div className="ml-6">
        <h1 className='text-4xl text-left font-bold mb-9'>Let's Learn & <br/> Earn </h1>
        <p className='text-2xl text-left ml'>Get chance to win <br /> upto &nbsp;<span className='text-4xl font-bold text-primary'>Rs. 60,000</span></p>
        <div className='text-left mt-10'>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="px-7" onClick={() => setIsDialogOpen(true)}>Refer Now</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Refer Now</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                <p>Refer your friends and get a chance to win upto Rs. 60,000</p>
              </DialogDescription>
              <ReferralForm onClose={handleDialogClose} onSuccess={handleFormSuccess} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="">
        <img className='w-[41rem] mx-auto' src={banner} alt="banner" />
      </div>

      {showToast && (
        <ToastProvider>
          <Toast>
            <div className="flex">
              <div className="flex-1">
                <p className="text-sm font-medium">Referral email has been sent!</p>
              </div>
            </div>
          </Toast>
          <ToastViewport />
        </ToastProvider>
      )}
    </div>
  );
};

export default Banner;
