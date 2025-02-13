import React from "react";

const BoxBanner = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full  flex-col flex gap-6  p-10">{children}</div>;
};

export default BoxBanner;
