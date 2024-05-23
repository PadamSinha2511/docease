import { useState } from 'react';
import { Button } from "@/components/patientportal/AppointmentButton/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/patientportal/AppointmentButton/ui/dialog"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {CONFIG} from "../../constants/constant"

export default function AppointmentButton({pid,did}) {
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const[loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const handleConfirm = async(e) => {
    e.preventDefault();
    setIsConfirmDialogOpen(false);
    // Logic to book the appointment can be placed here
    
    try{
      setLoading(true)
      const {data} = await axios.post(`${CONFIG.apiurl}/api/appt/book`,
        {
          patientId:pid,
          doctorId:did
        })
        if(data.success)
          {
            navigate("/patientspage")
          }
      setLoading(false)
    }catch(error)
    {
      console.log(error);
      alert("Error booking appointment")
    }


  };

  return (
    <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full bg-purple-600 text-white">Book Appointment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>Do you really want to book this appointment?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button className="mr-2" variant="outline" onClick={() => setIsConfirmDialogOpen(false)}>
            Decline
          </Button>
          <Button className="bg-purple-600 text-white" onClick={(e)=>handleConfirm(e)}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
