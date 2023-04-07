// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import './AboutCube.css'

// import "./styles.css";

// import images
// import required modules
import permanentMarkerWebDevLogo from '../../assets/logos/permanentMarkerWebDevLogo2.png';
import kevHuck from '../../assets/images/kev-huck.jpg';
import kevTeach from '../../assets/images/Kevin/kevTeach.png';
import tromboneStilt from '../../assets/images/stiltTrombone.jpg';
import trombone from '../../assets/images/trombone.jpg';
import mayDayTiger from '../../assets/images/tiger.jpg';
import gargoyle from '../../assets/images/gargoyle.jpg';
// import marathon1 from '../../assets/images/marathon_1.jpg';
import marathon2 from '../../assets/images/marathon_2.jpg';
import marathonFinish from '../../assets/images/Finish_Line.jpg';
import marathonMedal from '../../assets/images/medal.jpg';





const AboutCube = () => {
// export default function AboutCube() {
  return (
    <>
      <Swiper
        speed={2400}
        style={{
          width: '300px',
          height: '300px',
          position: 'relative',
          padding: '0',

        }}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          // delay: 2400,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[EffectCube, Pagination, Autoplay]}
        className="galleryCubeSwiper"
      >
        <SwiperSlide>
          <img src={permanentMarkerWebDevLogo} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={kevHuck} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={kevTeach} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={mayDayTiger} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gargoyle} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={trombone} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={marathon1} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={marathon2} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={marathonFinish} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={marathonMedal} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={tromboneStilt} alt='' style={{display: 'block', width: '100%'}}/>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default AboutCube;