/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ctbbVnivHwL
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { CardTitle, CardContent, CardHeader, CardDescription, CardFooter, Card } from "@/components/patients-dashboard/card"
import { Button } from "@/components/patients-dashboard/button"
import Navbar from "../components/auth/Navbar"
import DoctorImage1 from "../assets/doctor-1.jpg"
import DoctorImage5 from "../assets/doctor-5.png"
import DoctorImage4 from "../assets/doctor-4.jpg"
import PatientImage1 from"../assets/patient-image-1.jpg"
export default function PatientsDashboard() {
  return (
    (<Card className="border">
        <><Navbar/></>
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
        <CardContent className="border p-4">
          <div className="flex items-center gap-4">
            <img
              alt="Your Avatar"
              className="rounded-full"
              height="48"
              src={PatientImage1}
              style={{
                aspectRatio: "48/48",
                objectFit: "cover",
              }}
              width="48" />
            <div>
              <div className="font-semibold text-lg">Harsh Verma</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Patient</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">General Hospital</div>
            </div>
          </div>
        </CardContent>
      </CardHeader>
      <CardHeader>
        <CardTitle>Appointments</CardTitle>
        <CardDescription>View and manage your appointment requests with doctors.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 overflow-auto">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="40"
                  src={DoctorImage1}
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40" />
                <div>
                  <div className="font-semibold">Dr. Varenya Singh</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Cardiologist</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">Headache</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">10:00 AM</div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-medium text-yellow-500">Pending</div>
                <div className="flex gap-2">
                  <Button disabled size="sm" variant="outline">
                    Join Meeting
                  </Button>
                  <Button size="sm" variant="outline">
                    Cancel Request
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="40"
                  src={DoctorImage5}
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40" />
                <div>
                  <div className="font-semibold">Dr. Chulli Chaurasia</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Dermatologist</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">Fever</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">10:30 AM</div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-medium text-green-500">Accepted</div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="bg-purple-600 text-white">
                    Join Meeting
                  </Button>
                  <Button size="sm" variant="outline">
                    Cancel Request
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="40"
                  src={DoctorImage4}
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40" />
                <div>
                  <div className="font-semibold">Dr. Shipra Chaubey</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Pediatrician</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">Cough</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">11:00 AM</div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-medium text-red-500">Declined</div>
                <div className="flex gap-2">
                  <Button disabled size="sm" variant="outline">
                    Join Meeting
                  </Button>
                  <Button size="sm" variant="outline">
                    Cancel Request
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto bg-purple-600">Logout</Button>
      </CardFooter>
    </Card>)
  );
}
