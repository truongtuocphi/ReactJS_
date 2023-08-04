import React from 'react'
import Course from '../components/Course';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css'

import { Pagination, Navigation } from 'swiper/modules'

const listBanner = [
  {
    id: 1,
    urlBanner: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png',
    title: 'Học ReactJS Miễn Phí',
    describe: 'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
    colorBanner: 'bg-gradient-to-r from-sky-500 to-indigo-500',
    colorText: 'text-sky-500',
  },
  {
    id: 2,
    urlBanner: 'https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png',
    title: 'Khóa Học HTML, CSS Pro',
    describe: 'Đây là khóa học đầy đủ và chi tiết nhất bạn có thể tìm thấy được ở trên Internet!',
    colorBanner: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    colorText: 'text-purple-500',
  },
  {
    id: 3,
    urlBanner: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png',
    title: 'Thành Quả Của Học Viên',
    describe: 'Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.',
    colorBanner: 'bg-gradient-to-r from-red-500 to-indigo-500',
    colorText: 'text-red-500',
  },
]

export default function Home() {
  const [ data, setData ] = useState([]);

  const url = "http://localhost:8000/Course";
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(json => {
      setData(json);
    })
    .catch(e => console.log("Error: ", e))
  }, [])

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {listBanner.map(items => (
          <SwiperSlide key={items.id} data-hash={`slide${items.id}`}>
            <div className={`w-full h-fit ${items.colorBanner} rounded-2xl grid grid-cols-5 items-center`}>
              <div className='p-9 text-white col-span-3'>
                <h2 className='text-4xl font-bold mb-3'>{items.title}</h2>
                <p className='text-lg mb-6'>{items.describe}</p>
                <a href='#Click' className={`px-4 py-2 border-2 rounded-full font-bold`}>Tìm hiểu thêm</a>
              </div>
              <div className='col-span-2 h-72'>
                <div style={{ backgroundImage: `url(${items.urlBanner})` }} className='w-full h-full bg-center bg-contain bg-no-repeat'></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='mt-20 px-11 pb-20'>
        <div className='mb-5'>
          <h2 className='text-neutral-800 text-2xl font-extrabold'>Khóa học miễn phí</h2>
        </div>
        <div className='grid grid-cols-4 gap-7'>
          {data.map(items => (
            <div key={items.id} className='col-span-1'>
              <NavLink to='/course-detail'>
                <Course title={items.title} imgCourse={items.img} />
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
