import { Icon } from '@iconify/react';

import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';

export default function TimelineSlider() {
  const timelineData = [
    [
      {
        year: 'Sep, 2018 - Continue',
        name: 'Kawasaki Bangladesh',
        position: 'Full Stack Web Developer',
        type: 'Collaborated on web applications and API designs. Developed a unique Car Parts E-commerce platform and optimized the Chery Bangladesh website, achieving a 97% speed increase.',
      },
      {
        year: 'Oct, 2018 - Continue',
        name: 'Continental Motors',
        position: 'IT Manager',
        type: 'Oversaw IT operations, managed tech budgets, and maintained institutional servers. Pioneered an integrated call center and introduced a smart attendance system with automated payroll.',
      },
    ],
    [
      {
        year: 'Jan, 2018 - Sep, 2018',
        name: 'Bengal Group of Industries',
        position: 'Sr. Software Developer',
        type: 'Championed Laravel-based e-commerce solutions and managed custom WordPress projects. Launched the "Pick4Less" platform and led a team of 15, enhancing client satisfaction by 25%.',
      },
      {
        year: '2015 - Continue',
        name: 'Upwork',
        position: 'Freelancer',
        type: 'Mastered WordPress and Shopify development. Engineered a store generating $13 million in sales annually and earned the "Top Rated Freelancer" badge.',
      },
    ],
  ];

  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-arrow_style3">
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Timeline columnData={item} />
        </Div>
      ))}
    </Slider>
  );
}
