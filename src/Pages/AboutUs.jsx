import React from "react";
import Navbar from "../Components/Common/Header/Navbar";
import Footer from "../Components/Common/Footer/Footer";
import { Link } from "react-router-dom";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="aboutus-container">
        <div>
          <img
            src="/images/aboutus-hero.png"
            alt="Location icon"
            className="hero-image"
          />
        </div>
        <div className="para-box">
          <p className="aboutus-para">
            Home of Honour is a trusted and award winning real estate
            development company operating out of Ekiti Nigeria, with over 5 real
            estate products across the Ekiti Metropolitan Cities. <br />
            With 50 trained independent marketers, we have been able to help
            over 159 Nigerians become property owners of over over one 1000
            square metres of well documented and titled landed properties within
            the space of 4 years.
            <br />
            Our Success story is not far-fetched: we are diligent and we keep
            our word. <br />
            Our focus is to bring clarity to, and demystify the process of
            buying and selling real estate in Nigeria: especially in Ekiti
            State. All our Properties are free from Government acquisitions,
            land-grabbers trouble or any other encumbrance whatsoever. <br />
            We offer other value added services including but not limited to
            legal advice on property matters, architectural drawings etc. <br />
            Under the leadership of our amiable chairman, Chief Bosun Makinde,
            our mission is to render top-notch services to our numerous
            satisfied clients while maintaining the highest standards of
            integrity without stress or hassel
          </p>
        </div>

        <section className="award-container">
          <div className="award-title-container flex">
            <h2 className="award-title">awards</h2>
            <p className="award-sub-txt">
              Among several others, we have been honored with numerous awards
              such as:
            </p>
          </div>
          <div className="grid-container">
            <div className="grids">
              <div className="box-flex">
                <div className="award-container">
                  <div className="dashicon-one">
                    <img
                      src="/icons/dashicons_awards.svg"
                      className="dashicon-one-img center-circle"
                      alt="Award icon"
                    />
                  </div>
                  <div className="box">
                    <p className="box-text">
                      real estate excellence awards nomination (2021).
                    </p>
                  </div>
                </div>

                <div>
                  <div className="dashicon-one">
                    <img
                      src="/icons/dashicons_awards.svg"
                      className="dashicon-one-img center-circle"
                      alt="Award icon"
                    />
                  </div>

                  <div className="box">
                    <p className="box-text">
                      West Africa Innovation Awards (Most Customer Driven
                      Property Development Company Of The Year).
                    </p>
                  </div>
                </div>

                <div>
                  <div className="dashicon-one">
                    <img
                      src="/icons/dashicons_awards.svg"
                      className="dashicon-one-img center-circle"
                      alt="Award icon"
                    />
                  </div>

                  <div className="box">
                    <p className="box-text">
                      The Nigerian Real Estate And Property Award (Real Estate
                      Company Of The Year, 2022).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-vision">
          <div className="mv-image">
            <div className="mv-sub-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                className="target-icon"
              >
                <path
                  d="M84.0497 28.125H76.2955L57.2705 47.1417C57.9258 48.8116 57.986 50.6563 57.4411 52.3655C56.8963 54.0746 55.7795 55.544 54.2786 56.5266C52.7778 57.5092 50.9843 57.9451 49.1999 57.7609C47.4155 57.5766 45.7489 56.7836 44.4804 55.5151C43.2119 54.2466 42.4189 52.5801 42.2346 50.7956C42.0504 49.0112 42.4863 47.2178 43.4689 45.7169C44.4515 44.216 45.9209 43.0992 47.6301 42.5544C49.3392 42.0095 51.1839 42.0697 52.8538 42.725L71.8747 23.7042V15.95C71.8751 14.9124 72.2872 13.9174 73.0205 13.1833L80.2288 5.97501C80.362 5.84036 80.5294 5.74472 80.7131 5.69844C80.8967 5.65217 81.0894 5.65704 81.2705 5.71251C81.6413 5.82084 81.9163 6.12917 81.9913 6.50834L83.908 16.0958L93.4913 18.0125C93.8663 18.0875 94.1747 18.3625 94.283 18.7333C94.3377 18.9135 94.3426 19.1051 94.2971 19.2878C94.2516 19.4704 94.1575 19.6374 94.0247 19.7708L86.8122 26.9792C86.4496 27.3423 86.019 27.6305 85.545 27.8271C85.071 28.0237 84.5628 28.1249 84.0497 28.125Z"
                  fill="#FAFAFA"
                />

                <path
                  d="M10.9375 50C10.9375 60.36 15.053 70.2957 22.3786 77.6214C29.7043 84.947 39.64 89.0625 50 89.0625C55.1298 89.0625 60.2093 88.0521 64.9486 86.0891C69.6879 84.126 73.9941 81.2487 77.6214 77.6214C81.2486 73.9941 84.126 69.6879 86.089 64.9486C88.0521 60.2093 89.0625 55.1298 89.0625 50C89.0625 46.2584 88.5375 42.6417 87.5583 39.2209C87.3637 38.4354 87.4813 37.6051 87.8865 36.9046C88.2916 36.2041 88.9527 35.6881 89.7306 35.4652C90.5085 35.2422 91.3425 35.3297 92.0572 35.7092C92.7719 36.0888 93.3115 36.7307 93.5625 37.5C94.7042 41.475 95.3125 45.6667 95.3125 50C95.3125 75.025 75.025 95.3125 50 95.3125C24.975 95.3125 4.6875 75.025 4.6875 50C4.6875 24.975 24.975 4.68752 50 4.68752C54.2292 4.68336 58.4333 5.27086 62.5 6.43336C62.8965 6.54458 63.2671 6.73308 63.5905 6.98802C63.914 7.24296 64.1838 7.55931 64.3845 7.91888C64.5853 8.27846 64.713 8.67416 64.7603 9.08325C64.8076 9.49234 64.7736 9.90675 64.6602 10.3026C64.5468 10.6985 64.3563 11.0681 64.0996 11.3901C63.8429 11.7122 63.5251 11.9803 63.1644 12.1791C62.8037 12.3778 62.4073 12.5034 61.998 12.5484C61.5887 12.5935 61.1744 12.5572 60.7792 12.4417C57.2737 11.4406 53.6456 10.9343 50 10.9375C39.64 10.9375 29.7043 15.053 22.3786 22.3787C15.053 29.7043 10.9375 39.64 10.9375 50Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M29.6872 50C29.6989 52.7597 30.2728 55.488 31.3741 58.0185C32.4754 60.5489 34.0808 62.8284 36.0924 64.7177C38.1041 66.6069 40.4796 68.0664 43.0741 69.0069C45.6686 69.9475 48.4276 70.3493 51.1826 70.188C53.9375 70.0267 56.6307 69.3055 59.0977 68.0686C61.5647 66.8317 63.7537 65.105 65.5311 62.9938C67.3084 60.8827 68.6369 58.4314 69.4353 55.7897C70.2337 53.148 70.4853 50.3713 70.1747 47.6292C70.0872 47.0738 70.1516 46.5051 70.361 45.9833C70.5704 45.4616 70.917 45.0062 71.3642 44.6654C71.8113 44.3246 72.3423 44.111 72.9009 44.0475C73.4595 43.9839 74.0249 44.0726 74.5372 44.3042C75.5831 44.7708 76.2872 45.7667 76.3789 46.9083C77.0259 52.3885 75.9494 57.9341 73.2993 62.7743C70.6491 67.6145 66.5568 71.5089 61.5913 73.916C56.6257 76.3232 51.0336 77.1236 45.5922 76.206C40.1508 75.2883 35.1304 72.6983 31.2289 68.7958C27.3285 64.8976 24.7378 59.8822 23.8161 54.4453C22.8944 49.0084 23.6875 43.4194 26.0853 38.4535C28.483 33.4876 32.3667 29.3909 37.1976 26.7316C42.0285 24.0723 47.5672 22.9822 53.0456 23.6125C53.4597 23.6509 53.862 23.7716 54.2289 23.9675C54.5958 24.1635 54.9199 24.4307 55.1822 24.7535C55.4445 25.0763 55.6397 25.4482 55.7564 25.8474C55.873 26.2466 55.9089 26.6651 55.8617 27.0784C55.8146 27.4916 55.6854 27.8913 55.4818 28.254C55.2782 28.6166 55.0042 28.935 54.6759 29.1904C54.3477 29.4459 53.9717 29.6332 53.5701 29.7414C53.1686 29.8497 52.7494 29.8767 52.3372 29.8208C49.4915 29.4918 46.6084 29.7683 43.8771 30.6322C41.1458 31.4961 38.628 32.9278 36.4891 34.8334C34.3502 36.739 32.6384 39.0754 31.4662 41.6893C30.2939 44.3031 29.6877 47.1353 29.6872 50Z"
                  fill="#FAFAFA"
                />
              </svg>
              <h3 className="m-title">our mission</h3>
              <div className="m-para">
                <p className="m-para-text">
                  Our primary goal is to facilitate your journey towards
                  becoming one of our highly satisfied owners, with minimal
                  stress and hassle.
                </p>
              </div>
            </div>
            <div className="mv-sub-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <g filter="url(#filter0_d_654_1505)">
                  <path
                    d="M114.215 59.2406C114.056 58.8844 110.222 50.3859 101.639 41.8031C93.6889 33.8531 80.0155 24.375 59.9998 24.375C39.9842 24.375 26.3108 33.8531 18.3608 41.8031C9.77796 50.3859 5.94359 58.8844 5.78421 59.2406C5.67984 59.481 5.62598 59.7403 5.62598 60.0023C5.62598 60.2644 5.67984 60.5237 5.78421 60.7641C5.94359 61.125 9.77796 69.6188 18.3608 78.2016C26.3295 86.1703 39.9889 95.625 59.9998 95.625C80.0108 95.625 93.6889 86.1516 101.639 78.2016C110.222 69.6188 114.056 61.125 114.215 60.7641C114.32 60.5237 114.374 60.2644 114.374 60.0023C114.374 59.7403 114.32 59.481 114.215 59.2406ZM98.8873 75.6469C88.0733 86.4281 74.9811 91.875 59.9811 91.875C44.9811 91.875 31.9076 86.4141 21.0748 75.6469C16.4656 71.0501 12.5892 65.773 9.58109 60C12.5948 54.2257 16.4776 48.9485 21.0936 44.3531C31.9264 33.5859 44.9998 28.125 59.9998 28.125C74.9998 28.125 88.0733 33.5859 98.9061 44.3531C103.522 48.949 107.404 54.2261 110.419 60C107.405 65.7743 103.522 71.0514 98.9061 75.6469H98.8873ZM59.9998 39.375C55.9206 39.375 51.933 40.5846 48.5412 42.8509C45.1494 45.1172 42.5059 48.3384 40.9448 52.1072C39.3838 55.8759 38.9753 60.0229 39.7711 64.0237C40.567 68.0246 42.5313 71.6996 45.4158 74.5841C48.3002 77.4685 51.9752 79.4329 55.9761 80.2287C59.977 81.0245 64.124 80.6161 67.8927 79.055C71.6614 77.494 74.8826 74.8504 77.1489 71.4586C79.4152 68.0669 80.6248 64.0792 80.6248 60C80.6186 54.5318 78.4437 49.2894 74.5771 45.4228C70.7105 41.5562 65.468 39.3812 59.9998 39.375ZM59.9998 76.875C56.6623 76.875 53.3997 75.8853 50.6246 74.0311C47.8495 72.1768 45.6866 69.5413 44.4094 66.4578C43.1321 63.3743 42.798 59.9813 43.4491 56.7078C44.1002 53.4344 45.7074 50.4276 48.0674 48.0676C50.4274 45.7076 53.4343 44.1004 56.7077 43.4492C59.9811 42.7981 63.3741 43.1323 66.4576 44.4095C69.5411 45.6868 72.1766 47.8497 74.0309 50.6248C75.8851 53.3998 76.8748 56.6624 76.8748 60C76.8748 64.4755 75.0969 68.7677 71.9323 71.9324C68.7676 75.0971 64.4754 76.875 59.9998 76.875Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_654_1505"
                    x="-4"
                    y="0"
                    width="128"
                    height="128"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_654_1505"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_654_1505"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <h3 className="v-title">our vission</h3>
              <div className="v-para">
                <p className="v-para-text">
                  Building a renowned reputation and excellence in the real
                  estate industry all over Nigeria and prompting individuals to
                  testify about the professionalism displayed by our team in
                  property handling all over the globe.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="team-container">
          <div>
            <h2 className="team-title">our dynamic teams</h2>
          </div>

          <div className="team-profile-one team-profile-flex">
            <div className="team-details">
              <p className="team-details-para">
                <strong>
                  {" "}
                  CHIEF BOSUN MAKINDE W. <br /> CHAIRMAN/CEO
                  BosunmakindeHOH@yahoo.com
                </strong>
                <p className="details-sub-para">
                  He founded HOH International Limited in 2018, the parent
                  company of HOH Homes and Property Limited; the fastest rising
                  real estate development company in Nigeria. He describes
                  himself as a product of God’s GRACE. He is happily married
                  with children.
                </p>
              </p>
            </div>
            <img
              src="/images/team-1.png"
              className="team-pro"
              alt="A male professional"
            />
          </div>
          <hr className="hr" />

          <div className="team-profile-two team-profile-flex">
            <div className="team-details">
              <p className="team-details-para">
                <strong>
                  {" "}
                  MRS. AJOKE F. MAKINDE <br />
                  CHAIRMAN/COO AjokemakindeHOH@yahoo.com{" "}
                </strong>
                <p className="details-sub-para">
                  As a Chief Operating Officer (COO) at HOH international
                  Limited, I am a seasoned professional with a track record of
                  driving operational excellence and strategic growth with over
                  a decade of experience in the real estate business.
                </p>
              </p>
            </div>
            <img
              src="images/team-2.png"
              className="team-pro"
              alt="A female professional"
            />
          </div>
          <hr className="hr" />

          <div className="team-profile-three team-profile-flex">
            <div className="team-details">
              {" "}
              <div className="team-details-para">
                <strong>
                  {" "}
                  BARRISTER TIMOTHY AKPAN <br /> LEGAL ADVISER
                  Timothy232HOH@yahoo.com{" "}
                </strong>
                <p className="details-sub-para">
                  As a legal advise tailored to the real estate sector, I bring
                  a unique skill set to bolster the company operations,providing
                  all legal support to the organization
                </p>
              </div>
            </div>

            <img
              src="/images/team-3.png"
              alt="A male professional"
              className="team-pro"
            />
          </div>
          <hr className="hr" />

          <div className="team-profile-four team-profile-flex">
            <div className="team-details">
              <p className="team-details-para">
                <strong>
                  {" "}
                  Ms JUDITH EFFONG <br />
                  LEAD MARKETER JudithHOH@yahoo.com{" "}
                </strong>
                <p className="details-sub-para">
                  At the core of my leadership as a Lead Marketer HOH Real
                  Estate firm lies a dedication to translating strategic vision
                  into tangible market success. With a solid foundation in real
                  estate dynamics and a keen eye for emerging trends.
                </p>
              </p>
            </div>
            <img
              src="/images/team-4.png"
              alt="A female professional"
              className="team-pro"
            />
          </div>
          <hr className="hr" />

          <div className="team-profile-five team-profile-flex">
            <div className="team-details">
              <p className="team-details-para">
                <strong>
                  {" "}
                  JUMOKE AKINFOLA <br />H R Folajummy@yahoo.com{" "}
                </strong>
                <p className="details-sub-para">
                  Our HR department at HOH Real Estate envisions creating an
                  environment where talent thrives, and each individual's
                  potential is maximized. We strive to foster a culture of
                  collaboration, creativity, and growth, aligning the personal
                  aspirations of our employees with the company's objectives.
                </p>
              </p>
            </div>
            <img
              src="/images/team-5.png"
              className="team-pro"
              alt="A female professional professional"
            />
          </div>
        </section>

        <div className="r-wrapper">
          <div className="quick-r-btn">
            <a href="https://wa.me/08136154917" target="_blank">
              <img
                src="/icons/whatsapp.png"
                alt="whatsapp"
                className="whatsapp-icon"
              />

              <button className="resp-btn"> Quick Response</button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
