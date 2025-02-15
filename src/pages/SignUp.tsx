import useOAuth from "@/features/auth/useOAuth";
import Button from "@/ui/Button";
import CustomForm from "@/ui/CustomForm";
import CustomInput from "@/ui/CustomInput";
import ImageBanner from "@/ui/ImageBanner";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function SignUp() {
  const { googleSignIn, isLoading } = useOAuth();
  return (
    <section className="grid p-2 relative w-full min-h-screen grid-cols-2">
      <section className="w-full py-14 h-full flex items-center gap-5 flex-col justify-center">
        <Link to="/" className="font-extrabold text-xl absolute top-4 left-6">
          INVENT
        </Link>

        <div className="space-y-3 text-center">
          <h1 className="font-bold capitalize text-2xl">
            Get Started with INVENT ✨
          </h1>
          <p className="text-gray-600 w-96 text-xs font-semibold">
            Easily track sales, customers, and orders, Join Invent and simplify
            your inventory management today!
          </p>
        </div>
        <CustomForm>
          <CustomInput label="Full Name" placeholder="Full Name" type="text" />
          <CustomInput label="Email" placeholder="Email address" type="email" />
          <CustomInput
            label="Create Password"
            placeholder="Enter your password "
            type="password"
          />
          <CustomInput
            label="Confirm Password"
            placeholder="Confirm password "
            type="password"
          />
          <Button type="secondary" size="large">
            Sign up
          </Button>
          <div className="w-full flex items-center justify-center relative ">
            <p className="text-xs absolute p-2 bg-white">OR</p>
            <hr className="my-4 border-t w-full border-gray-300" />
          </div>
          <Button type="google" icon={FcGoogle} size="google">
            Sign up with Google
          </Button>
          <p className="flex items-center text-xs gap-1 font-semibold">
            Already have an account?
            <Link className="underline" to="/login">
              Log in
            </Link>
          </p>
        </CustomForm>
      </section>
      <section className="sticky top-0 h-screen">
        <ImageBanner />
      </section>
    </section>
  );
}
