import React from "react";

const HeroComponent = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero--wrapper">
          <div className="hero__content">
            <div className="hero__content__wrapper">
              <div className="hero__content__title">
                Supercharge
                <br />
                Your Small Business
              </div>
              <div className="hero__content__sub">
                from your <span>WordPress</span> dashboard
              </div>
              <p className="hero__content__desc">
                WP ERP optimizes your small to large enterprise
                <br />
                with powerful HRM, CRM & Accounting – Unlock more with
                <br />
                20+ extensions & Project Management module.
              </p>
              <div className="hero__content__btns">
                <a
                  href="/"
                  className="hero__content__btns__link hero--btn--one"
                >
                  <i className="far fa-arrow-alt-circle-down" /> Download Free
                </a>

                <a
                  href="/"
                  className="hero__content__btns__link hero--btn--two"
                >
                  <i className="far fa-play-circle" /> Demo
                </a>

                <a href="/" className="hero__content__btns__link">
                  <i className="far fa-file-alt" />{" "}
                  <span className="hero--btn--three">Documentation</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hero__show">
            <img
              src="/images/hero.png"
              alt="hero"
              className="hero__show__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
