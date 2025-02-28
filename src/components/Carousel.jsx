import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { API_URL } from "../config";

const Carousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/carousel/`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching carousel images:", error));
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="w-full h-[500px]"
    >
      {images.map((img) => (
        <SwiperSlide key={img.id}>
          <img src={img.image} alt={img.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent w-full text-white opacity-80 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-3xl font-bold mb-2">{img.title}</h3>
              <p className="text-lg">{img.description || "Explore this post!"}</p>
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
