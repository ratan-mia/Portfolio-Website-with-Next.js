
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

export default function ServiceIconBox() {

  const services = [
    {
      imgLink: "./images/icon/service_icon_1.svg",
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
    <>
     <Div id="service">
       <Div className="container">
       <Div className="row">
       <SectionHeading
                  title="Services I can help you with"
                  subtitle="What Can I Do"
                  btnText="See All Services"
                  btnLink="/service"
                />
                <Spacing lg="90" md="45" />
       {services.map((element, index) => (
            <div
              className="col-lg-4 col-md-6 cs-card cs-style1"
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

        </Div>
       </Div>
     </Div>
    </>

  );
};

