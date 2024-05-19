import { useState } from 'react';
import { Button } from "@/components/patientportal/AppointmentButton/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/patientportal/AppointmentButton/ui/dialog"

export default function AppointmentButton() {
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  const handleConfirm = () => {
    setIsConfirmDialogOpen(false);
    // Logic to book the appointment can be placed here
    alert('Appointment booked!');
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
          <Button className="bg-purple-600 text-white" onClick={handleConfirm}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
