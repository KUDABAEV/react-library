import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BookSkeleton from "./Skeleton";
import {CartItem} from "../CartItem";
import './main-slider.scss';



export const MainSlider = ({books, isLoading}) => {

    return (
        <div className='container '>
            <div className='slider__items myCarousel'>
                <Carousel
                          // additionalTransfrom={0}
                          arrows
                          // autoPlaySpeed={3000}
                          //centerMode={true}
                          className="myCarousel"
                          // containerClass="container"
                          // dotListClass=""
                          // draggable
                          // focusOnSelect={false}
                          // infinite={true}
                          // itemClass=""
                          // keyBoardControl
                          // minimumTouchDrag={80}
                          // pauseOnHover
                          // renderArrowsWhenDisabled={false}
                          // renderButtonGroupOutside={false}
                          // renderDotsOutside={false}
                          responsive={{
                              desktop: {
                                  breakpoint: {
                                      max: 3000,
                                      min: 1439
                                  },
                                  items: 5,
                                  partialVisibilityGutter: 40
                              },
                              tablet: {
                                  breakpoint: {
                                      max: 1439,
                                      min: 767
                                  },
                                  items: 3,
                                  partialVisibilityGutter: 30
                              },
                              mobile: {
                                breakpoint: {
                                    max: 767,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                          }}
                          // rewind={false}
                          // rewindWithAnimation={false}
                          // rtl={false}
                          // shouldResetAutoplay
                          // showDots={false}
                          // sliderClass=""
                          slidesToSlide={1}
                          // swipeable
                >
                    {
                        isLoading
                            ? [... new Array(10)].map((_,index) => <BookSkeleton key={index} />)
                            : books.map((obj) => (
                                <CartItem
                                    key={obj.id}
                                    {...obj}
                                />
                            ))
                    }
                </Carousel>
            </div>
        </div>
    )
}