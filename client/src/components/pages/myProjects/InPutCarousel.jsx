// import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import image from "../../../assets/image.jpeg";

function InPutCarousel() {
  return (
    <section className="flex flex-col gap-3">
      <input
        type="search"
        placeholder="Title"
        className="input bg-transparent border-[1px] border-text-color focus:border-text-color   placeholder-text-color"
      />
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
    </section>
  );
}
export default InPutCarousel;
