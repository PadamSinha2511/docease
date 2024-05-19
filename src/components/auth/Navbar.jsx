import {
  Navbar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { UserCircleIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { UserState } from "@/context/UserProvider";

export default function NavbarDark() {
  const navigate = useNavigate();
  const { user, setUser } = UserState();

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate('/login');
  };

  const navigateToProfile = () => {
    if(user.role == 'patient')
    navigate('/patientspage');
  else
  navigate('/doctorspage');
  };

  return (
    <Navbar
      variant="gradient"
      color="black"
      className="mx-auto max-w-screen-xl px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-black font-serif">
        <Typography
          as="a"
          href="http://localhost:5173/"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          DOCEASE
        </Typography>
        <div className="ml-auto flex items-center gap-4 md:mr-4">
          {user && (
            <>
              <IconButton variant="text" onClick={navigateToProfile}>
                <UserCircleIcon className="h-5 w-5 text-purple-600" />
              </IconButton>
              <IconButton variant="text" onClick={logout}>
                <ArrowRightOnRectangleIcon className="h-5 w-5 text-purple-600" />
              </IconButton>
            </>
          )}
        </div> 
      </div>
    </Navbar>
  );
}
