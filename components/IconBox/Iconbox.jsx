
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";



export default function ServiceIconBox() {

  const services = [
       {
      imgLink: "./images/icons/wordpress.svg",
      title: "WordPress Development",
      text: "I specialize in creating dynamic and user-friendly websites using WordPress. Whether you need a blog, portfolio site, or e-commerce platform, I'll customize WordPress to suit your unique requirements",
      effect: "zoom-out-up",
      duration: "500",
      delay: "500",
    },
    {
      imgLink: "./images/icons/shopify.svg",
      title: "Shopify Development",
      text: "Elevate your e-commerce business with Shopify. I design and develop Shopify stores that are visually appealing, easy to manage, strategically optimized for increased sales and conversions.",
      effect: "zoom-out-up",
      duration: "500",
      delay: "600",
    },
    {
      imgLink: "./images/icons/laravel.svg",
      title: "Laravel Development",
      text: "Unlock the power of Laravel for web application development. I harness the versatility and scalability of Laravel to build robust, secure, and feature-rich web applications",
      effect: "zoom-out-up",
      duration: "500",
      delay: "700",
    },
    {
      imgLink: "./images/icons/code-solid.svg",
      title: "Single Page Application (React.js)",
      text: "I craft fluid, visually stunning SPAs using React.js. From interface design to dynamic interactions, I transform concepts into captivating web applications.",
      effect: "zoom-out-up", 
      duration: "500",
      delay: "200",
    },
    {
      imgLink: "./images/icons/cart-shopping-solid.svg",
      title: "E-commerce Solutions",
      text: "Need an online store? I can develop e-commerce platforms with secure payment gateways, inventory management, and seamless user experiences.",
      effect: "zoom-out-up",
      duration: "500",
      delay: "300",
    },
    {
      imgLink: "./images/icons/cart-shopping-solid.svg",
      title: "IT and Project Management",
      text: "Combining deep IT expertise with Agile practices, I ensure projects align with organizational goals, delivering on time and with excellence.",
      effect: "zoom-out-up",
      duration: "500",
      delay: "400",
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

