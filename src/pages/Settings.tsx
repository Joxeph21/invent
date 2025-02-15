import { Switch, SwitchProps } from "@material-tailwind/react";
import BoxBanner from "../ui/BoxBanner";
import CustomSelect from "../ui/CustomSelect";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { OptionTypes } from "@/utils/Types";

interface SwitchInterface extends SwitchProps {
  label?: string;
}

export const switchProps: SwitchInterface = {
  color: "green",
  ripple: false,
  containerProps: {},
  inputRef: null,
};
const Settings = () => {
  const currencyOptions: OptionTypes[] = [
    { value: "NGN", label: "Naira" },
    { value: "USD", label: "Dollar" },
    { value: "EUR", label: "Euro" },
  ];

  return (
    <BoxBanner>
      <div className="flex items-center shadow-sm bg-white p-3 rounded-md justify-between">
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>
      <div className="flex capitalize font-semibold px-8 text-sm  gap-3 flex-col shadow-sm bg-white p-3 rounded-md">
        <div className="border-b gap-10  flex items-center px-4 py-5">
          <h2>Dark Mode</h2>
          <Switch
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
            {...switchProps}
          />
        </div>
        <div className="w-full flex items-center border-b rounded-md px-4 py-5 gap-10">
          <h2>Currency</h2>
          <div>
            <CustomSelect options={currencyOptions} />
          </div>
        </div>
        <div className="w-full flex items-center border-b rounded-md px-4 py-5 gap-10">
          <h2>Language</h2>
          <div>
            <CustomSelect options={[{ value: "en-us", label: "English" }]} />
          </div>
        </div>
        <div className="w-full flex items-center border-b rounded-md px-4 py-5 gap-10">
          <Link to={"/"} className="text-brandGreen">
            Account Settings
          </Link>
        </div>
        <div className="w-full flex items-center border-b rounded-md px-4 py-5 gap-10">
          <Link to={"/"} className="text-brandGreen">
            Terms of Service
          </Link>
        </div>
        <div className="w-full flex items-center border-b rounded-md px-4 py-5 gap-10">
          <Link to={"/"} className="text-brandGreen">
            Privacy Policy
          </Link>
        </div>
        <div className="w-full flex items-center border-b rounded-md px-4 py-5 gap-10">
          <Link to={"/"} className="text-brandGreen">
            Customer Support
          </Link>
        </div>
        <div className="w-full flex items-center border-b rounded-md px-4 py-5 gap-10">
          <Button size="regular" type="danger">
            Delete Account
          </Button>
        </div>
      </div>
    </BoxBanner>
  );
};

export default Settings;
