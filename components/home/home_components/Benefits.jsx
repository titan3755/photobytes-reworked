import { Fragment } from 'react'
import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper"
import { carouselData } from "../../../data/iterators"

export default function Benefits () {
    return ( 
        <Fragment>
            <Swiper
                pagination={{
                type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    carouselData.map(unit => {
                        return (
                            <SwiperSlide key={unit.title}>
                                <img src={unit.imgUrl} alt="" srcset="" className="w-full object-cover brightness-[40%]" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <h2 className="text-center text-white font-bold text-5xl">{unit.title}</h2>
                                    <p className="mt-6 text-white font-sans font-medium text-lg">{unit.desc}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </Fragment>
    )
}