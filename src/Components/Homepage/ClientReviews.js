import React from "react";

const ClientReviews = () => {
  return (
    <section className="client">
      <div className="container">
        <div className="client--wrapper">
          <div className="client__header">Reviews by our clients</div>
          <div className="client__row">
            <div className="client__row__card">
              <div className="client__row__card__face">
                <img src="/images/client-face-1.png" alt="client face" />
              </div>
              <div className="client__row__card__quote--left">
                <img src="/images/left-quote.png" alt="left quote" />
              </div>
              <p className="client__row__card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                rem aperiam aut ut, quaerat harum doloribus accusantium fugit
                architecto earum.
              </p>
              <div className="client__row__card__quote--right">
                <img src="/images/right-quote.png" alt="right quote" />
              </div>
              <div className="client__row__card__name">Toma Fong</div>
              <div className="client__row__card__position">CEO</div>
            </div>

            <div className="client__row__card">
              <div className="client__row__card__face">
                <img src="/images/client-face-2.png" alt="client face" />
              </div>
              <div className="client__row__card__quote--left">
                <img src="/images/left-quote.png" alt="left quote" />
              </div>
              <p className="client__row__card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                rem aperiam aut ut, quaerat harum doloribus accusantium fugit
                architecto earum.
              </p>
              <div className="client__row__card__quote--right">
                <img src="/images/right-quote.png" alt="right quote" />
              </div>
              <div className="client__row__card__name">Toma Fong</div>
              <div className="client__row__card__position">CEO</div>
            </div>

            <div className="client__row__card">
              <div className="client__row__card__face">
                <img src="/images/client-face-3.png" alt="client face" />
              </div>
              <div className="client__row__card__quote--left">
                <img src="/images/left-quote.png" alt="left quote" />
              </div>
              <p className="client__row__card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                rem aperiam aut ut, quaerat harum doloribus accusantium fugit
                architecto earum.
              </p>
              <div className="client__row__card__quote--right">
                <img src="/images/right-quote.png" alt="right quote" />
              </div>
              <div className="client__row__card__name">Toma Fong</div>
              <div className="client__row__card__position">CEO</div>
            </div>
          </div>
          <div className="client__link">
            <a href="/">Read All The Testimonials</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
