import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="size-[13%] absolute top-[55%] left-[105%] -translate-x-1/2 -translate-y-1/2 bg-[#0067A5] blur-[142px]" />
      <div className="size-[13%] absolute top-[35%] -left-[5%] -translate-x-1/2 -translate-y-1/2 bg-[#0067f5] blur-[142px]" />
      <main className="relative flex flex-col gap-50">{children}</main>
    </>
  );
};

export default HomeLayout;
