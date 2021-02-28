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
                           <h1 className="display-4 text-center w-100 font-weight-bold mb-5 mt-5">Tooted</h1>

                        
                        </div>
                                
                          
                          
                        </div>
                    </div>
                </section>
      </Layout>
    )
  }
}

export default Kontakt;
