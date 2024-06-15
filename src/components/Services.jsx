import React from "react";
import "../css/services.css";

function Services() {
  return (
    <>
      <section className="services">
        <h1>Digital Marketing Services</h1>
        <container className="container">
          <div className="item">
            <img src={require("../assets/1.png")} alt="" />
            <h3>Content Planning</h3>
            <div>
              <p>
                Content planning for social media includes:
                <ul>
                  <li>researching target audience preferences</li>
                  <li>setting specific goals</li>
                  <li>creating a content calendar</li>
                  <li>analyzing post performance</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="item2 item-mid">
            <img src={require("../assets/2.png")} alt="" />
            <h3>Graphic designing</h3>
            <div>
              <p>
                Graphic design for social media includes creating tailored
                visual content for different platforms like images,
                infographics, and banners. Designs consider target audience,
                branding, and platform requirements to boost engagement,
                increase brand awareness, and drive traffic.
              </p>
            </div>
          </div>

          <div className="item2">
            <img src={require("../assets/3.png")} alt="" />
            <h3>Ads Creation And Management</h3>
            <div>
              <p>
                Meta ad campaigns utilize the Meta advertising platform to
                create targeted ads based on demographics, interests, and online
                behavior. I define objectives, target audience, create engaging
                content, and measure performance to enhance brand visibility,
                reach potential customers, and drive engagement and conversions.
              </p>
            </div>
          </div>
        </container>

        <container className="container">
          <div className="item2">
            <img src={require("../assets/4.png")} alt="" />
            <h3>Video Editing</h3>
            <div>
              <p>
                Video editing is essential for social media management,
                improving video content for audience engagement. Tasks include
                trimming, adding transitions, text overlays, music, color
                adjustments, and ensuring a cohesive style. Effective video
                editing helps create professional content that stands out on
                social media, aiding in achieving content strategy goals.
              </p>
            </div>
          </div>

          <div className="item2 item-mid">
            <img src={require("../assets/5.png")} alt="" />
            <h3>Engagement</h3>
            <div>
              <p>
                Social media engagement is vital for building relationships,
                increasing brand loyalty, and driving conversions. It involves
                interacting with the audience through likes, comments, and
                shares to create a sense of community, encourage participation,
                and boost visibility. Understanding audience preferences helps
                tailor content for improved social media performance.
              </p>
            </div>
          </div>

          <div className="item2">
            <img src={require("../assets/6.png")} alt="" />
            <h3>Performance Marketing</h3>
            <div>
              <p>
                Performance marketing in social media management maximizes
                campaign performance through data-driven strategies. It focuses
                on achieving measurable results by optimizing targeting, ad
                creative, and messaging based on user behavior. Analysis of
                metrics like click-through rates and conversions helps
                businesses track and improve social media marketing
                effectiveness.
              </p>
            </div>
          </div>
        </container>
      </section>
    </>
  );
}

export default Services;
