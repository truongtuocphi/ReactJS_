import React from 'react'

const listBanner = [
  { 
    urlBanner: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png', 
    title: 'Học ReactJS Miễn Phí',  
    describe: 'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
    colorBanner: 'bg-gradient-to-r from-sky-500 to-indigo-500',
    colorText: 'text-sky-500',
  },
  { 
    urlBanner: 'https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png', 
    title: 'Khóa Học HTML, CSS Miễn Phí',  
    describe: 'Đây là khóa học đầy đủ và chi tiết nhất bạn có thể tìm thấy được ở trên Internet!',
    colorBanner: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    colorText: 'text-purple-500',
  },
  { 
    urlBanner: 'https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png', 
    title: 'Thành Quả Của Học Viên',  
    describe: 'Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.',
    colorBanner: 'bg-gradient-to-r from-red-500 to-indigo-500',
    colorText: 'text-red-500',
  },
] 

export default function Home() {
  return (
    <div>
      {listBanner.map(items => (
        <div key={items.title} className={`h-72 ${items.colorBanner} rounded-2xl grid grid-cols-5 items-center`}>
          <div className='p-9 text-white col-span-3'>
            <h2 className='text-4xl font-bold mb-3'>{items.title}</h2>
            <p className='text-lg mb-6'>{items.describe}</p>
            <a href='#' className={`px-4 py-2 border-2 rounded-full font-bold`}>Tìm hiểu thêm</a>
          </div>
          <div className='col-span-2'>
            <img className='float-right' src={items.urlBanner} alt='#' />
          </div>
        </div>
      ))}
    </div>
  )
}
