import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MOVIES } from '../../data';
import 'swiper/css/autoplay';
import './changeSwiper.css'
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

function HeaderCarousel() {
  const {handleMoveTop} = useStateContext();

    return (
      <div className='w-full md:w-[80vw] mx-auto h-90'>
        <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        speed={1000}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}  
        loop={true}
      >
        {MOVIES.map(movie => (
        <SwiperSlide key={movie.id}>
          <div className='relative'>
            <Link onClick={handleMoveTop} to={`/${movie.slug}`}><img src={movie.image} className='w-full h-[30vh] sm:h-[70vh] object-bottom rounded-lg' /></Link>
            <div className='absolute bottom-[10%] left-[50%] -translate-x-[50%] flex flex-col  items-center text-white'>
              <div className='text-3xl'>{movie.name}</div>
              <div className='text-xl'>{movie.name_en}</div>
            </div>
          </div>
        </SwiperSlide>
        ))}

      </Swiper>
    </div>
    )
}

export default HeaderCarousel
