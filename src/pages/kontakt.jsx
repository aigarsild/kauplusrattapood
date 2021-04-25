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
                        <h1 className="display-4 text-center w-100 font-weight-bold mb-5 mt-5">Kontakt</h1>
                                <p><a href="mailto:laagri.rattahooldus@gmail.com?Subject=Rattahooldus%20lehelt" target="_top"> laagri.rattahooldus@gmail.com </a></p>
                                <p><a href="tel:+37256861763">56 86 17 63</a></p>
                                <p>Vae 2, Laagri</p>
                                <p className="font-weight-bold">Oleme tegevuses:</p>
                                <p>Iga päev, aga me ei pruugi alati olla töökojas. Lepime enne kokkusaamist aja kokku.</p>

                                </div>
                                
                          <div className="col-sm-12 col-md-6 col mt-3">
                          <Form tel="true" formMessage="Kui tekkis küsimusi siis kirjutage meile!" formOrigin="Kontakt"></Form>

                                
                          
                    
                          </div>

                          <div className="col-sm-12 col-md-6 mt-5">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4067.8075303078294!2d24.6085886!3d59.3512542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692be3192adb061%3A0x58718a6ce635e109!2sVae%202%2C%20Laagri%2C%2076401%20Harju%20maakond!5e0!3m2!1sen!2see!4v1614532881431!5m2!1sen!2see" width="100%" height="450"></iframe>
                          </div>
                          
                        </div>
                    </div>
                </section>
      </Layout>
    )
  }
}

export default Kontakt;
