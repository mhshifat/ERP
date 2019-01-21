import React from "react";

const FeaturesComponent = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features--wrapper">
          <div className="features__header">
            <img
              src="/images/complete.png"
              alt="icon"
              className="features__header__icon"
            />
            <h2 className="features__header__title">
              Trusted by <span className="color--blue">3000+ Businesses</span>{" "}
              over 100 countries
            </h2>
          </div>
          <div className="features__row">
            <div className="features__row__card">
              <div className="features__row__card__img">
                <img src="/images/features1.png" alt="features" />
              </div>
              <h2 className="features__row__card__title">Open Source</h2>
              <p className="features__row__card__desc">
                The Core plugin and HR, CR modules are absolutely free to use,
                free to customize and you can add enhancements depending on your
                ideas and needs.
              </p>
            </div>

            <div className="features__row__card back--linear">
              <div className="features__row__card__img">
                <img src="/images/features2.png" alt="features" />
              </div>
              <h2 className="features__row__card__title">
                Feature Filled Modules
              </h2>
              <p className="features__row__card__desc">
                Modules are designed to take your business to the next level. If
                you have a small business, this is ideal for keeping your budget
                tight but yet get professional results.
              </p>
            </div>

            <div className="features__row__card">
              <div className="features__row__card__img">
                <img src="/images/features3.png" alt="features" />
              </div>
              <h2 className="features__row__card__title">Support and Docs</h2>
              <p className="features__row__card__desc">
                We have made a detailed documentation of our features and
                operation. We provide 5 days support, webinars and training to
                your staff if necessary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;
