import CommonForm from "@/components/common/form";
import { Link } from "react-router-dom";
import {loginFormControls} from "@/config";

function AuthLogin() {
  console.log("Rendering AuthLogin Component...");

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <span className="mt-2">
          Don't have an account{" "}
          <Link
            to={"/auth/register"}
            className="font-medium ml-2 text-primary hover:underline"
          >
            Register
          </Link>
        </span>

        <CommonForm formControls={loginFormControls} />
      </div>
    </>
  );
}

export default AuthLogin;
