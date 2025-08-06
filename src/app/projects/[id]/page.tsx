import Tags from "@/features/talents/components/Tags";
import { ChevronRight, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div className="relative w-full h-[calc(100svh-150px)] flex flex-col gap-8">
      <div className="absolute top-[35%] left-[95%] -translate-x-1/2 -translate-y-1/2 bg-main-blue blur-[150px] size-[15%] pointer-events-none select-none" />
      <div className="absolute top-[85%] left-[60%]  -translate-x-1/2 -translate-y-1/2 bg-lighter-blue blur-[150px] size-[15%] pointer-events-none select-none" />
      <div className="absolute top-[60%] left-[3%]  -translate-x-1/2 -translate-y-1/2 bg-dim-blue blur-[150px] size-[15%] pointer-events-none select-none" />
      <Link href={"/projects"} className="flex mt-6">
        <ChevronRight />
        <span>بازگشت</span>
      </Link>
      <div className=" bg-background-gray/50 size-full rounded-4xl shadow-lg p-16 flex flex-col gap-8">
        <div className="relative  flex justify-between">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-[40px] font-bold text-foreground">
              عنوان پروژه
            </h1>
            <span className="text-base text-foreground-gray font-normal">
              آخرین آپدیت : 14 آذر 1400
            </span>
          </div>
          <div className="absolute -top-[114px] left-0 w-[460px] h-[260px] rounded-3xl overflow-hidden shadow-md">
            <Image
              className="size-full"
              src={"/temp.png"}
              width={1593}
              height={812}
              alt="Projects"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-[32px] font-bold text-foreground">خلاصه پروژه</h2>
          <p className="text-justify text-foreground-gray text-base font-normal">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-[32px] font-bold text-foreground">تکنولوژی ها</h3>
          <div className="flex gap-4">
            {Array(3)
              .fill("")
              .map((_item, index) => {
                return <Tags key={index} />;
              })}
          </div>
        </div>
        <div>
          <h3 className="text-[32px] font-bold text-foreground">لینک ها</h3>
          <div className="text-foreground-gray">
            <div className="flex">
              <span>وبسایت :</span>
              <Link href={"/#"} className="flex">
                <span>example.com</span>
                <SquareArrowOutUpRight size={9} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
