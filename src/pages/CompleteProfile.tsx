import { FormEvent, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ConfigureStore, MoreInformation, StoreContact } from "@/ui/MultiForms";
import type { BusinessFormValues } from "@/utils/Types";
import Button from "@/ui/Button";
import CustomForm from "@/ui/CustomForm";
import MiniLoader from "@/ui/MiniLoader";
import useUpdateStore from "@/features/store/useUpdateStore";
import { Navigate, useLocation } from "react-router-dom";

export default function CompleteProfile() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3];
  const { updateStoreInfo, isLoading } = useUpdateStore();
  const location = useLocation();
  const userId = location?.state?.userId;

  useGSAP(() => {
    gsap.to("section", {
      y: 0,
      duration: 0.5,
      ease: "power1.in",
      opacity: 1,
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#form",
      {
        x: 50,
        opacity: 0.5,
        delay: 1.4,
        ease: "power1.in",
      },
      {
        x: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
      }
    );
  }, [currentStep]);

  if (!userId) return <Navigate to="/login" />;

  const validationSchema = Yup.object<BusinessFormValues>({
    business_name: Yup.string().required("Business name is required"),
    business_type: Yup.string().required("Business type is required"),
    business_phone: Yup.string()
      .required("Phone number is required")
      .min(11, "Invalid Phone number")
      .max(14, "Invalid Phone number"),
    specify: Yup.string().notRequired(),
    business_address: Yup.string().required("Business address is required"),
    business_email: Yup.string()
      .email("Invalid email")
      .required("Business email is required"),
    website: Yup.string().notRequired(),
  });

  const formik = useFormik<BusinessFormValues>({
    validationSchema,
    initialValues: {
      business_name: "",
      business_type: "",
      specify: "",
      business_address: "",
      business_email: "",
      business_phone: "",
      website: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      updateStoreInfo(
        { id: userId, values },
        { onSettled: () => setSubmitting(false) }
      );
    },
  });

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <ConfigureStore formik={formik} />;
      case 2:
        return <StoreContact formik={formik} />;
      case 3:
        return <MoreInformation formik={formik} />;
      default:
        return null;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentStep === steps.length) {
      formik.handleSubmit(e);
    } else {
      if (currentStep === steps.length) return;
      setCurrentStep((c) => c + 1);
    }
  };

  const checkFormValidity = () => {
    switch (currentStep) {
      case 1:
        if (
          !formik.values.business_name ||
          !formik.values.business_type ||
          (formik.values.business_type === "other" && !formik.values.specify)
        ) {
          return true;
        } else return false;
      case 2:
        if (!formik.values.business_email || !formik.values.business_phone) {
          return true;
        } else return false;
      case 3:
        if (!formik.values.business_address) {
          return true;
        } else return false;
      default:
        return true;
    }
  };

  return (
    <section className="w-full section fixed overflow-hidden translate-y-12 opacity-50 h-screen flex flex-col gap-5 items-center justify-center">
      <div className="space-y-3 text-center">
        <h1 className="font-bold capitalize text-2xl">Complete your profile</h1>
        <p className="text-gray-600 text-xs font-semibold">
          We require some extra information to get you started
        </p>
      </div>

      <ul className="flex relative items-center w-60 justify-between">
        {steps.map((el, i) => (
          <li
            className={`text-sm size-8  flex items-center justify-center  rounded-full ${
              i + 1 <= currentStep
                ? "bg-brandBlack text-white"
                : "text-black ring-1 bg-white ring-brandBlack"
            }`}
            key={i}
          >
            {el}
          </li>
        ))}
        <div className="absolute w-full -z-10 h-1 bg-gray-300">
          <span
            className="h-1 bg-brandBlack block transition-all ease-linear duration-500"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          ></span>
        </div>
      </ul>
      <CustomForm id="form" onSubmit={handleSubmit}>
        {renderForm()}
        <div className="w-full flex items-center gap-4 justify-end">
          {currentStep > 1 && (
            <Button
              disabled={currentStep === 1 || formik.isSubmitting}
              size="small"
              buttonType="button"
              onClick={() => setCurrentStep((prev) => prev - 1)}
              type="secondary"
            >
              Back
            </Button>
          )}
          <Button
            disabled={checkFormValidity() || formik.isSubmitting}
            size="small"
            buttonType="submit"
            type="secondary"
          >
            {isLoading ? (
              <MiniLoader />
            ) : currentStep === steps.length ? (
              "Submit"
            ) : (
              "Next"
            )}
          </Button>
        </div>
      </CustomForm>
    </section>
  );
}
