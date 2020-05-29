import React, { Component } from 'react';
import Prices from "../components/pricesComponent"
import Layout from "../components/layout"
import SEO from "../components/seo"
import scrollTo from "gatsby-plugin-smoothscroll"

class Hooldus extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Jalgratta hooldus" description="Mobiilne jalgratta hooldus, tuleme kohale ja hooldame teie ratta" />
        <section className="light-section d-flex align-content-center flex-wrap min-vh-100">
          <div className="container prices-section">
            <div className="row">
              <div className="lead w-100">
                <h1 className="display-4 text-center w-100 font-weight-bold mb-5">Jalgratta hooldus</h1>

                <h2 className="display-5 w-100 font-weight-bold mb-5">Meie hooldame sinu ratast - tasuta jalgratta transport töökotta ja tagasi</h2>
                
                <p>Jalgratas on igapäevane asi. Nii nagu hooldad ennast ja kõiki asju, mida kasutad iga päev, tuleb hooldada ka ratast. Meie rattapood hooldab meeleldi sinu ratast.</p>
                <p className="mb-5">Kui hea on haarata ratas, mis on suurepärases korras ja lihtsalt sõita. Pidur pidurdab hästi, ratas ei logise ega kriuksu.</p>

                <h2 className="display-5 text-center w-100 font-weight-bold mb-5">Lihthoolduse ja täishoolduse korral on tasuta transport</h2>
                <p className="mb-5">Tellides Lihthoolduse või täishoolduse on jalgratta transport tasuta Tallinna ja Saue valla piirdes</p>
                
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
            <div className="container" id="hinnakiri">
              <Prices></Prices>
            </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Hooldus;
