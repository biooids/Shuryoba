// import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import image from "../../../../assets/image.jpeg";

function Carousel() {
  return (
    <section className="h-[500px]  rounded-xl overflow-hidden">
      {" "}
      <Swiper
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        className="w-full h-full"
      >
        <SwiperSlide className=" ">
          <img
            src={image}
            alt=""
            className="w-full h-full object-contain bg-white bg-opacity-5 pointer-events-none select-none"
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <img
            src={image}
            alt=""
            className="w-full h-full object-contain bg-white bg-opacity-5 pointer-events-none select-none"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
export default Carousel;
