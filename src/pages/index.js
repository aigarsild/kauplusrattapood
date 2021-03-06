import React, { Component } from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import scrollTo from "gatsby-plugin-smoothscroll"
import Prices from "../components/pricesComponent"
import { Link } from "gatsby"

class Home extends Component {
  render() {
    return (
      <Layout>
        <section>
          <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="tel" name="telephone" />
            <input type="text" name="origin" />
            <textarea name="message"></textarea>
          </form>
          <SEO
            title="Jalgratta hooldus ja parandus"
            description="Kauplus rattapood parandab ja hooldab rattaid, ratta hoolduse hinnakiri"
          />
          <section className="row slider d-flex align-content-center flex-wrap min-vh-100">
            
            <h1 className="display-4 text-center w-100 font-weight-bold mb-4">
              Jalgrattahooldus ja parandus Laagris, Vae 2
            </h1>
            <div className="lead text-center w-100">
              Enne külastust helistage <a href="tel:+37256861763">56 86 17 63</a>, kirjutage
              <a
                href="mailto:laagri.rattahooldus@gmail.com?Subject=Rattahooldus%20lehelt"
                target="_top"
              >
                {" "}
                laagri.rattahooldus@gmail.com{" "}
              </a> või saatke kiri <Link
                    
                    className="nav-link"
                    to="/kontakt/"
                  >
                    kontakti vormi
                  </Link>
              <p></p>
            </div>

            <div className="w-100 text-center">
              <a
                href="#hinnakiri"
                onKeyUp={() => scrollTo("#hinnakiri")}
                onClick={() => scrollTo("#hinnakiri")}
                className="shadow btn btn-dark font-weight-bold m-4 pt-3 pb-3 pl-5 pr-5"
              >
                Vaata rattahooldus hinnakirja
              </a>
            </div>
            
          </section>

          <section className="prices-section light-section d-flex align-content-center flex-wrap min-vh-100 row">
            <div className="container" id="hinnakiri">
              <Prices></Prices>
            </div>
          </section>

          <section className="d-flex align-content-center flex-wrap min-vh-100">
            <div className="container">
              <div data-sal="zoom-in"
                        data-sal-delay="100"
                        data-sal-easing="ease"
                        data-sal-duration="500" className="row">
                <h2 className="slogan display-5 font-weight-bold text-center w-100">
                  Taastame jalgrattaid. Kui teil on mõni huvitav jalgratas, mida taastada võtke meiege ühendust
                </h2>
                <div className="lead text-center w-100">
                  Lisainfo saamiseks kirjuta
                  <a
                    href="mailto:laagri.rattahooldus@gmail.com?Subject=Rattahooldus%20lehelt"
                    target="_top"
                  >
                    {" "}
                    laagri.rattahooldus@gmail.com{" "}
                  </a>
                  , helista <a href="tel:+37256861763">56 86 17 63</a> või saatke kiri <Link
                    
                    className="nav-link"
                    to="/kontakt/"
                  >
                    kontakti vormi
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Layout>
    )
  }
}

export default Home
