import { FormikProps } from "formik";
import CustomInput from "./CustomInput";
import type { BusinessFormValues, OptionTypes } from "@/utils/Types";
import { Option, Select, Switch } from "@material-tailwind/react";
import CustomSelect from "./CustomSelect";
import { switchProps } from "@/pages/Settings";
import { useState } from "react";

const businessTypes: OptionTypes[] = [
  { value: "retail_ecommerce", label: "Retail & E-commerce" },
  { value: "food_beverage", label: "Food & Beverage" },
  { value: "health_wellness", label: "Health & Wellness" },
  { value: "technology_software", label: "Technology & Software" },
  { value: "finance_banking", label: "Finance & Banking" },
  { value: "real_estate_construction", label: "Real Estate & Construction" },
  { value: "manufacturing_production", label: "Manufacturing & Production" },
  { value: "education_training", label: "Education & Training" },
  { value: "professional_services", label: "Professional Services" },
  { value: "entertainment_media", label: "Entertainment & Media" },
  { value: "other", label: "Other" },
];

interface formikProps {
  formik: FormikProps<BusinessFormValues>;
}

export function ConfigureStore({ formik }: formikProps) {
  const handleBusinessType = (value?: string) => {
    formik.setFieldValue("business_type", value || "");
  };
  return (
    <>
      <CustomInput
        value={formik.values.business_name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          Boolean(formik.errors.business_name) &&
          Boolean(formik.touched.business_name)
        }
        errorMessage={formik.errors.business_name}
        name="business_name"
        type="text"
        label="What is your business name?"
        placeholder="Business / Store Name"
      />
      <CustomSelect
        onBlur={formik.handleBlur}
        value={formik.values.business_type}
        onChange={(value) => handleBusinessType(value)}
        name="business-type"
        error={Boolean(
          formik.errors.business_type && formik.touched.business_type
        )}
        errorMessage={formik.errors.business_type}
        placeholder="Business Type"
        label="What type of Business?"
        options={businessTypes}
      />
      {formik.values.business_type === "other" && (
        <CustomInput
          value={formik.values.specify}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            Boolean(formik.errors.specify) && Boolean(formik.touched.specify)
          }
          errorMessage={formik.errors.specify}
          name="specify"
          type="text"
          label="Please Specify"
          placeholder="Specify"
        />
      )}
    </>
  );
}

export function StoreContact({ formik }: formikProps) {
  return (
    <>
      <CustomInput
        value={formik.values.business_email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          Boolean(formik.errors.business_email) &&
          Boolean(formik.touched.business_email)
        }
        errorMessage={formik.errors.business_email}
        name="business_email"
        type="email"
        label="What is your Business email?"
        placeholder="Business email"
      />
      <CustomInput
        value={formik.values.business_phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          Boolean(formik.errors.business_phone) &&
          Boolean(formik.touched.business_phone)
        }
        errorMessage={formik.errors.business_phone}
        name="business_phone"
        type="text"
        label="Business Phone number (Include country code)"
        placeholder="Business Phone Number"
      />
    </>
  );
}

export function MoreInformation({ formik }: formikProps) {
  const [hasWebsite, setHasWebsite] = useState(false);
  return (
    <>
      <CustomInput
        value={formik.values.business_address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          Boolean(formik.errors.business_address) &&
          Boolean(formik.touched.business_address)
        }
        errorMessage={formik.errors.business_address}
        name="business_address"
        type="text"
        label="Where is your store located?"
        placeholder="Business Address"
      />
      <div className="flex items-center w-full gap-5">
        <Switch
          checked={hasWebsite}
          onChange={() => setHasWebsite(!hasWebsite)}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
          {...switchProps}
        />
        <p className="text-xs font-semibold">
          Does your business have a website?
        </p>
      </div>
      <CustomInput
        disabled = {!hasWebsite}
        value={formik.values.website}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          Boolean(formik.errors.website) && Boolean(formik.touched.website)
        }
        errorMessage={formik.errors.website}
        name="website"
        type="text"
        label="Website URL"
        placeholder="Ex. www.example.com"
      />
    </>
  );
}
