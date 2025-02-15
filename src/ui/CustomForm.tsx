import React, { FormEvent } from "react";

type FormProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

function CustomForm({ id, children, className, onSubmit }: FormProps) {
  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className={`flex flex-col w-full max-w-[28em] items-center gap-5 ${className} `}
    >
      {children}
    </form>
  );
}

export default CustomForm;
