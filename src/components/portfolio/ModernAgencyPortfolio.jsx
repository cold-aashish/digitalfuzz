import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ModernAgencyPortfolio = () => {
  const hoverWrap = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hover_title = hoverWrap.current;

      if (hover_title) {
        function hoverImgFunc(event, hover_title) {
          const contentBox = hover_title.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          hover_title.children[0].style.transform = `translate(${dx}px, ${dy}px)`;
        }

        hover_title.addEventListener("mousemove", (event) => {
          setInterval(hoverImgFunc(event, hover_title), 1000);
        });
      }
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_2", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_2");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom_2", {
            scrollTrigger: {
              trigger: ".fade_bottom_2",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <div className="about__area-8 sp-x">
        <h6 className="text-end about-sub-right">About company</h6>
        <div className="section_wrapper b-100">
          <h4 className="react_border">
            <span>02</span>
          </h4>
        </div>
        <div className="row justify-content-between">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="about8">
              <h2 className="about8__title fade_bottom_2">
                equipped <br /> with creative team <br /> <span>and </span>
                <Link href="/about" className="hover_wrap" ref={hoverWrap}>
                  amazing brains
                  <span
                    className="hover_img"
                    style={{
                      backgroundImage:
                        "url(assets/imgs/portfolio/detail/7.jpg)",
                    }}
                  ></span>
                </Link>
              </h2>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="about8__content fade_bottom_2">
              <p>
                {" "}
                We're a design and tech partner specializing in digital innovation, crafting cutting-edge products and services in the world of Digital Marketing and IT. <br/> We help businesses stay relevant by delivering exceptional digital solutions from concept to creation, catering to both startups and established companies with trendy UI/UX design,<br/> full-stack development using latest technology and we provide all digital marketing services.
              </p>
              <Link href="/about" className="blog__btn about_btn">
                Read More{" "}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernAgencyPortfolio;
