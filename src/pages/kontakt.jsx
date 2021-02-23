import React, { Component } from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/formComponent';

class Kontakt extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Jalgratta hooldus ja parandus kontakt" description="Siit saab jalgratta poega kontakti, võtke julgelt ühendust"/>
        <section className="light-section d-flex align-content-center flex-wrap min-vh-100 row">
                    <div className="container">
                        <div className="row">
                            <div className="lead text-center w-100">
                                <h1 className="display-4 text-center w-100 font-weight-bold mb-5">Kontakt</h1>
                                <p><a href="mailto:laagri.rattahooldus@gmail.com?Subject=Rattahooldus%20lehelt" target="_top"> laagri.rattahooldus@gmail.com </a></p>
                                <p><a href="tel:+37256861763">56 86 17 63</a></p>
                                <p>Vae 2 - 16, Laagri</p>
                                <p className="font-weight-bold">Oleme tegevuses:</p>
                                <p>E-R  10 - 19</p>
                                <p>L    10 - 17 </p>
                                <p>P    Suletud</p>
                            </div>
                            <Form tel="true" formMessage="Kui tekkis küsimusi siis kirjutage meile!" formOrigin="Kontakt"></Form>
                        </div>
                    </div>
                </section>
      </Layout>
    )
  }
}

export default Kontakt;
