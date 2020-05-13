import React, { Component } from 'react';

import Layout from "../components/layout"

import SEO from "../components/seo"

import Prices from "../components/pricesComponent"

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
    <SEO title="Jalgratta hooldus ja parandus" />
                <section className="row slider d-flex align-content-center flex-wrap min-vh-100">
                    <h1 className="display-4 text-center w-100 font-weight-bold mb-4">Mobiilne ratta hooldus ja parandus</h1>
                    <div className="lead text-center w-100">
                        Aja saab kokkuleppida kirjutades
                        <a href="mailto:laagri.rattahooldus@gmail.com?Subject=Rattahooldus%20lehelt" target="_top"> laagri.rattahooldus@gmail.com </a>
                        või kirjutades <a href="#hinnakiri">hinnakirja all</a>
                        <p className="lead text-center w-100">Avame varsti füüsilise poe Laagris.</p>
                    </div>

                    <div className="w-100 text-center">
                        <a href="#hinnakiri" className="shadow btn btn-dark font-weight-bold m-4 pt-3 pb-3 pl-5 pr-5">Vaata hinnakirja</a>
                    </div>
                </section>

                <section className="row slider d-flex align-content-center flex-wrap min-vh-100">
                    <div className="container">
                        <div className="row">
                            <h2 className="display-4 text-center w-100 font-weight-bold mb-4">On jalgrattahooaeg! Kõik ratturid on juba õues</h2>
                            <div className="lead text-center w-100">
                                Sõidetakse metsas, poes ja niisama aleviku vahel.
                                Lapsed tiirutavad peale koolipäeva, et saaks koolimõtted peast ning kohtuda mõne sõbraga, et koos sõita ja seiklusi otsida.
                                Noored kasutavad ratast kui tavalist sõiduvahendit, millega oma peika või pruta juurde reisida.
                                Vahel on kondimootoriga ka hea raamatukokku minna.
                                Ja tööinimesed naudivad raudhobuga sõitu peale väljakutsuvat tööpäeva. Lõõgastav matk looduses, mmm!
                            <p>
                                    Jalgratas on igapäevane asi. Nii nagu hooldad ennast ja kõiki asju, mida kasutad iga päev, tuleb hooldada ka ratast.
                            </p>
                                <p>Laagri rattapood hooldab meeleldi sinu ratast.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="prices-section light-section d-flex align-content-center flex-wrap min-vh-100 row">
                    <div className="container" id="hinnakiri">
                        <Prices></Prices>
                    </div>
                </section>

                <section className="d-flex align-content-center flex-wrap min-vh-100">
                    <div className="container">
                        <div className="row">
                            <h2 className="slogan display-5 font-weight-bold text-center w-100">Taastame ka ise rattaid müügiks. Varsti saab ka vaatama tulla.</h2>
                            <div className="lead text-center w-100">
                                Lisainfo saamiseks kirjuta
                                <a href="mailto:laagri.rattahooldus@gmail.com?Subject=Rattahooldus%20lehelt" target="_top"> laagri.rattahooldus@gmail.com </a>
                                või helista <a href="tel:+37256861763">56 86 17 63</a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
    
    
            </Layout>
    )}
  
    }

export default Home;
