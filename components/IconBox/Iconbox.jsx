// import SectionHeading from "../SectionHeading/SectionHeading";

import SectionHeading from "../SectionHeading";
// components/IconBox/Iconbox.jsx
import styles from './Iconbox.module.scss';

export default function ServiceIconBox() {

  const services = [
    {
      imgLink: "./images/icon/icon1.png",
      title: "Sketches",
      text: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
      effect: "zoom-out-up",
      duration: "500",
      delay: "200",
    },
    {
      imgLink: "./images/icon/icon2.png",
      title: "UI/UX Design",
      text: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
      effect: "zoom-out-up",
      duration: "500",
      delay: "300",
    },
    {
      imgLink: "./images/icon/icon3.png",
      title: "Product Design",
      text: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
      effect: "zoom-out-up",
      duration: "500",
      delay: "400",
    },
    {
      imgLink: "./images/icon/icon4.png",
      title: "App Design",
      text: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
      effect: "zoom-out-up",
      duration: "500",
      delay: "500",
    },
    {
      imgLink: "./images/icon/icon5.png",
      title: "Motion Graphics",
      text: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
      effect: "zoom-out-up",
      duration: "500",
      delay: "600",
    },
    {
      imgLink: "./images/icon/icon6.png",
      title: "Responsive Design",
      text: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.",
      effect: "zoom-out-up",
      duration: "500",
      delay: "700",
    },
  ];
  return (
    <section>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"Service"} />
      <div className="container">
        <div className="row">
          {services.map((element, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos={element.effect ? element.effect : "zoom-out-up"}
              data-aos-duration={element.duration ? element.duration : "800"}
              data-aos-delay={element.delay ? element.delay : "200"}
            >
              <div className={`st-iconbox st-style1`}>
                <div className="st-iconbox-icon">
                  <img src={element.imgLink} alt="Icon" />
                </div>
                <h2 className="st-iconbox-title">{element.title}</h2>
                <div className="st-iconbox-text">{element.text}</div>
              </div>
              <div className="st-height-b30 st-height-lg-b30"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="st-height-b70 st-height-lg-b50"></div>
    </section>
  );
};

