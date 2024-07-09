import React,{useState} from "react";
import { FaUserPlus, FaClipboardList, FaGift, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReferralForm from './ReferralForm';
const HowDo = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleFormSuccess = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
  };
  return (
    <div>
      <h1 className="text-3xl">
        How do I <span className="text-primary"> Refer?</span>
      </h1>
      <div className="flex items-center justify-between mt-6 mb-5">
        <div
          style={{ boxShadow: "0px 14px 25px 14px rgba(0,0,0,0.1)" }}
          className="flex flex-col justify-center items-center rounded-full bg-white shadow-lg w-[20rem] h-[20rem]"
        >
          <FaUserPlus className="text-blue-500 text-6xl mb-7" />
          <p className="text-base">Submit referrals easily via our website’s referral section.</p>
        </div>
        <FaArrowRight className="text-6xl text-gray-400" />
        <div
          style={{ boxShadow: "0px 14px 25px 14px rgba(0,0,0,0.1)" }}
          className="flex flex-col justify-center items-center rounded-full bg-white shadow-lg w-[20rem] h-[20rem]"
        >
          <FaClipboardList className="text-blue-500 text-6xl mb-7" />
          <p className="text-base">Earn rewards once your referral joins an Accredian program.</p>
        </div>
        <FaArrowRight className="text-6xl text-gray-400" />
        <div
          style={{ boxShadow: "0px 14px 25px 14px rgba(0,0,0,0.1)" }}
          className="flex flex-col justify-center items-center rounded-full bg-white shadow-lg w-[20rem] h-[20rem]"
        >
          <FaGift className="text-blue-500 text-6xl mb-7" />
          <p className="text-base">Both parties receive a bonus 30 days after program enrollment. </p>
        </div>
      </div>
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
  );
};

export default HowDo;
