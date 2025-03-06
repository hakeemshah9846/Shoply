import { Outlet } from "react-router-dom";

function AuthLayout() {
  console.log("Rendering AuthLayout Component...");
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="hidden w-1/2 h-screen lg:flex items-center justify-center bg-black text-center text-primary-foreground ">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground">Welcome to ECommerce Shopping</h1>
        </div>

        <div className="h-screen w-1/2 flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
