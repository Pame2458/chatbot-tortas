import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Slider() {
  return (
    <div className="w-full flex justify-center mt-8">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="rounded-lg shadow-lg w-full max-w-4xl"
      >
        <SwiperSlide>
          <div className="h-[300px] flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1622576890453-8e50b6f7d5b0?w=500&auto=format&fit=crop&q=60"
              alt="Torta Colorida"
              className="w-full h-full object-contain"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[300px] flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1585850317906-46d08f28289e?w=500&auto=format&fit=crop&q=60"
              alt="Torta Blanca"
              className="w-full h-full object-contain"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[300px] flex justify-center items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1716398897690-8ff3b2d3511f?w=500&auto=format&fit=crop&q=60"
              alt="Torta Frutal"
              className="w-full h-full object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
