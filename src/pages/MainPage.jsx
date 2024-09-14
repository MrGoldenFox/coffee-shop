import Hero from "../components/Hero.jsx";
import Form from "../components/Form.jsx";
import {
  coffee_1,
  coffee_machine,
  cup_coffee_1,
  cup_coffee_2,
  cup_coffee_3,
  map,
  package_coffee,
  stars,
  testimonial_1,
  testimonial_2,
  yellow_stars,
} from "../utils/constants.jsx";
import { coffee_2 } from "../utils/constants.jsx";
import { coffee_3 } from "../utils/constants.jsx";
import { coffee_4 } from "../utils/constants.jsx";
import "./MainPage.css";

function MainPage() {
  return (
    <>
      <Hero />
      <main>
        <section className="section-process section-space" id="about">
          <article className="article-process">
            <p className="p-process">
              <span className="span-process">01</span>Best Coffee Flavour
            </p>
            <img src={coffee_1} alt="" />
          </article>
          <article className="article-process">
            <p className="p-process">
              <span className="span-process">02</span>Place to get lost
            </p>
            <img src={coffee_2} alt="" />
          </article>
          <article className="article-process">
            <p className="p-process">
              <span className="span-process">03</span>Proper roesting
            </p>
            <img src={coffee_3} alt="" />
          </article>
        </section>
        <section className="section-history section-space">
          <img src={coffee_4} alt="" />
          <article className="article-history">
            <span>Our history</span>
            <h2>
              Create a new<br></br> story with us
            </h2>
            <p>
              mauris rhoncus in imperdiet placerat. vestibu emismd nisl
              suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
              nibhtincidunt. donec et nibh maximus, est eu, mattis nuce.
              preasent ut quam quis quam venen atis fringilla. morbi vastibulum
              id tells mmodo mattis. aliauam erat volutpal.
            </p>
          </article>
        </section>
        <section className="coffee-popular section-space" id="shop">
          <p className="p-title">Popular Product</p>
          <h3>Coffee popular Product</h3>
          <article className="article-popular">
            <div>
              <img src={package_coffee} alt="" />
              <p>
                <span className="span-name">Coffee</span>
                <img src={stars} alt="" />
              </p>
              <h4>brazil coffee gred</h4>
              <p>
                Price - <span>$320.00</span>/ $358
              </p>
            </div>
            <div>
              <img src={package_coffee} alt="" />
              <p>
                <span className="span-name">Coffee</span>
                <img src={stars} alt="" />
              </p>
              <h4>brazil coffee gred</h4>
              <p>
                Price - <span>$320.00</span>/ $358
              </p>
            </div>
            <div>
              <img src={package_coffee} alt="" />
              <p>
                <span className="span-name">Coffee</span>
                <img src={stars} alt="" />
              </p>
              <h4>brazil coffee gred</h4>
              <p>
                Price - <span>$320.00</span>/ $358
              </p>
            </div>
          </article>
          <button className="product-btn">View all product</button>
        </section>
        <section className="advertising section-space">
          <img src={coffee_machine} alt="" />
          <article className="article-advertising">
            <h5>
              Coffee<br></br> machine, buy for home
            </h5>
            <p>
              mauris rhoncus in imperdiet placerat. vestibu emismd nisl
              suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
              nibhtincidunt. donec et nib maximus, est eu, mattis nuce. preasent
              ut quam quis quam venen atis fri ngilla. morbi vastibulum id tells
              mmodo mattis. aliauam erat volutpal.
            </p>
            <button>Discover now</button>
          </article>
        </section>
        <section className="menu-section section-space" id="menu">
          <p className="p-title">Menu</p>
          <h3>Coffee popular menu</h3>
          <article>
            <div className="proposition">
              <img src={cup_coffee_1} alt="" className="cup-of-coffee" />
              <p className="name-cup-of-coffee">Americano rosted gred</p>
              <p className="price-cup-of-coffee">$12:00</p>
            </div>
            <div className="proposition">
              <img src={cup_coffee_2} alt="" className="cup-of-coffee" />
              <p className="name-cup-of-coffee">Americano rosted gred</p>
              <p className="price-cup-of-coffee">$12:00</p>
            </div>
            <div className="proposition">
              <img src={cup_coffee_3} alt="" className="cup-of-coffee" />
              <p className="name-cup-of-coffee">Americano rosted gred</p>
              <p className="price-cup-of-coffee">$12:00</p>
            </div>
            <div className="proposition">
              <img src={cup_coffee_1} alt="" className="cup-of-coffee" />
              <p className="name-cup-of-coffee">Americano rosted gred</p>
              <p className="price-cup-of-coffee">$12:00</p>
            </div>
            <div className="proposition">
              <img src={cup_coffee_2} alt="" className="cup-of-coffee" />
              <p className="name-cup-of-coffee">Americano rosted gred</p>
              <p className="price-cup-of-coffee">$12:00</p>
            </div>
            <div className="proposition">
              <img src={cup_coffee_3} alt="" className="cup-of-coffee" />
              <p className="name-cup-of-coffee">Americano rosted gred</p>
              <p className="price-cup-of-coffee">$12:00</p>
            </div>
            <div className="proposition">
              <img src={cup_coffee_1} alt="" className="cup-of-coffee" />
              <p className="name-cup-of-coffee">Americano rosted gred</p>
              <p className="price-cup-of-coffee">$12:00</p>
            </div>
            <div className="proposition">
              <img src={cup_coffee_2} alt="" className="cup-of-coffee" />
              <p className="name-cup-of-coffee">Americano rosted gred</p>
              <p className="price-cup-of-coffee">$12:00</p>
            </div>
          </article>
        </section>
        <section className="testimonial-section">
          <p className="p-title">Testimonials</p>
          <h3>Says our customers</h3>
          <article className="testimonial-article">
            <div className="testimonial-div">
              <img src={testimonial_1} alt="" className="testimonial-photo" />
              <p className="p-testimonial-text">
                Education WP is a special build for effective education &
                Learning Management System site. Education WP is the next
                generation & one of the best education WordPress themes which
                all the strength of eLearning WP..
              </p>
            </div>
            <div className="testimonial-div">
              <aside>
                <h6 className="name-testimonial">John Smith</h6>
                <p className="p-testimonial-job">Product Designer</p>
              </aside>
              <img src={yellow_stars} alt="" className="stars" />
            </div>
          </article>
          <article className="testimonial-article">
            <div className="testimonial-div">
              <img src={testimonial_2} alt="" className="testimonial-photo" />
              <p className="p-testimonial-text">
                Education WP is a special build for effective education &
                Learning Management System site. Education WP is the next
                generation & one of the best education WordPress themes which
                all the strength of eLearning WP..
              </p>
            </div>
            <div className="testimonial-div">
              <aside>
                <h6 className="name-testimonial">Brett Lee</h6>
                <p className="p-testimonial-job">User Experience Designer</p>
              </aside>
              <img src={yellow_stars} alt="" className="stars" />
            </div>
          </article>
        </section>
        <section className="booking-section section-space" id="reservation">
          <img src={map} alt="" className="map" />
          <article className="booking-article">
            <p className="p-title">Reservation</p>
            <h3>Booking a table</h3>
            <Form />
          </article>
        </section>
        <section className="section-news section-space">
          <p className="p-title">Testimonials</p>
          <h3>Our latest news</h3>
          <article className="article-news">
            <aside>
              <img src={coffee_1} alt="" className="img-news" />
              <div className="div-news">
                <p className="p-name-news">
                  <span>By:</span> rasaline
                </p>
                <p className="p-date-news">23.01.2021</p>
              </div>
              <h5 className="h5-news">Ideal cocktails from barmen....</h5>
              <button className="btn-news">Read More ➞</button>
            </aside>
            <aside>
              <img src={coffee_1} alt="" className="img-news" />
              <div className="div-news">
                <p className="p-name-news">
                  <span>By:</span> rasaline
                </p>
                <p className="p-date-news">23.01.2021</p>
              </div>
              <h5 className="h5-news">Ideal cocktails from barmen....</h5>
              <button className="btn-news">Read More ➞</button>
            </aside>
            <aside>
              <img src={coffee_1} alt="" className="img-news" />
              <div className="div-news">
                <p className="p-name-news">
                  <span>By:</span> rasaline
                </p>
                <p className="p-date-news">23.01.2021</p>
              </div>
              <h5 className="h5-news">Ideal cocktails from barmen....</h5>
              <button className="btn-news">Read More ➞</button>
            </aside>
          </article>
        </section>
      </main>
    </>
  );
}

export default MainPage;
