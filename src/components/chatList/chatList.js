import './chatList.scss'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import AvatarCard from '../avatarCard/AvatarCard'
import AvatarCommentCard from '../avatarCommentCard/AvatarCommentCard'

import { findRenderedComponentWithType } from 'react-dom/test-utils'

function ChatList(props) {
  const DynamicComponent =
    props.componentType === 'A' ? AvatarCard : AvatarCommentCard
  const chatData = props.chatData

  console.log('chatList')
  console.log(chatData.data)

  return (
    <div style={{ marginTop: '16px' }}>
      <div>
        <Swiper
          className="swiper"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={6}
          slidesPerGroup={3}
          speed={600}
          loop={false}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {/* <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide>
          <SwiperSlide className="portrait-swiper-slide">
            <DynamicComponent />
          </SwiperSlide> */}

          {chatData.data.map((item) => (
            <SwiperSlide key={item.id} className="portrait-swiper-slide">
              <DynamicComponent characterData={item} />
            </SwiperSlide>
          ))}

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
      <div className="horizontal-line"></div>
    </div>
  )
}

export default ChatList
