import React from "react";

const AboutMe = () => {
  return (
    <div className="size-full flex flex-col justify-center items-center gap-16">
      <span className="h-max text-3xl font-bold text-foreground flex justify-center">
        درباره من
      </span>
      <span className="h-full flex flex-wrap  gap-4 p-4 text-justify ">
        برنامه نویسی را در دوران دبیرستان شروع کردم. در مسابقات جهانی و داخلی
        ربوکاپ شرکت کردم . در این مسابقات در لیگ باز شبیه سازی نجات (Co-Space)
        شرکت کردم و بعد از آن با جاوا اسکریپت شروع به کار کردم و پروژه های
        مختلفی را با Javascript, React js, Node js, Mysql انجام دادم که می
        توانید در GitHub من مشاهده کنید. اکنون در دانشگاه آزاد علوم تحقیقات
        تهران در رشته مهندسی کامپیوتر تحصیل می کنم و در آینده می خواهم در زمینه
        بلاکچین بیشتر فعالیت کنم.
      </span>
    </div>
  );
};

export default AboutMe;
