import Button from "@/ui/Button";
import CustomForm from "@/ui/CustomForm";
import { FcGoogle } from "react-icons/fc";
import CustomInput from "@/ui/CustomInput";
import ImageBanner from "@/ui/ImageBanner";
import { Link, useLocation } from "react-router-dom";
import useOAuth from "@/features/auth/useOAuth";
import toast from "react-hot-toast";

function Login() {
  const { googleSignIn, isLoading } = useOAuth();

  return (
    <section className="grid p-2 w-full relative h-screen grid-cols-2">
      <section className="w-full h-full flex items-center gap-5 flex-col justify-center">
        <Link to="/" className="font-extrabold text-xl absolute top-4 left-6">
          INVENT
        </Link>
        <div className="space-y-3 text-center">
          <h1 className="font-bold capitalize text-2xl">Welcome back 👋</h1>
          <p className="text-gray-600 text-xs font-semibold">
            Pick up where you left off, Sign in to continue.
          </p>
        </div>
        <CustomForm>
          <CustomInput
            name="email"
            label="Email"
            placeholder="Email address"
            type="email"
          />
          <CustomInput
            label="Password"
            name="password"
            placeholder="Enter your password "
            type="password"
          />
          <Link className="text-xs font-semibold w-full" to="/forgot-password">
            Forgot Password?
          </Link>
          <Button type="secondary" size="large">
            Log in
          </Button>
          <div className="w-full flex items-center justify-center relative ">
            <p className="text-xs absolute p-2 bg-white">OR</p>
            <hr className="my-4 border-t w-full border-gray-300" />
          </div>
          <Button
            onClick={() => googleSignIn()}
            type="google"
            isLoading={isLoading}
            icon={FcGoogle}
            size="google"
          >
            Log in with Google
          </Button>
          <p className="flex items-center text-xs gap-1 font-semibold">
            Don&apos;t have an account?
            <Link className="underline" to="/signup">
              Sign up for free
            </Link>
          </p>
        </CustomForm>
      </section>
      <ImageBanner />
    </section>
  );
}
export default Login;
