import React, { Component } from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
import wheelImg from "./../images/bikepic.jpeg"

class Meist extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Jalgratta poe meeskond" description="Jalgratta poe meeskonnnast ja meie tegemistest" />
        <section className="light-section d-flex align-content-center flex-wrap min-vh-100">
          <div className="container">
            <h1 className="display-4 text-center w-100 font-weight-bold mb-5 mt-5">Meist</h1>
            <div className="row">
              <div className="col-md rounded mr-4 float-left"><img src={wheelImg} className="rounded shadow img-fluid" alt="jalgratas"></img></div>
              <div className="col-md lead w-100">

                <h2 className="display-5 w-100 font-weight-bold mb-5">Jalgrattapoe tiim koosneb kogenud ratturitest</h2>
                <p>Rattafännide ja igapäevaste ratturitena oleme läbi aastate pidanud kogema seda kui palju aega ja tähelepanu velod vajavad.</p><p>Meie mehaanik on suure osa oma elust elanud jalgrattakultuuri pealinnas Kopenhaagenis. Ta vuntsis üles ja ehitas neid seal lugematul hulgal. Võib öelda, et rattad on tema suurim kirg elus. Tagasi Eestisse naastes otsustas ta avada oma rattapoe. </p>
                <p>Meie mehaanik on rattapoe süda. Tema kogemuste pagasi tõttu suudame kiirelt kaardistada sinu ratta vajadused ja anda talle tagasi tema elu parima vormi. </p>
                <p className="mb-5">Hoolitseme su ratta eest, et su ratas saaks sinu eest hoolitseda.</p>

                <h2 className="display-5 w-100 font-weight-bold mb-5">Meie töökoda asub Laagris, Vae 2</h2>
                <p>Sissepääs on peauksest ja asume ruum 16.</p>
                <iframe src="https://www.google.com/maps/embed?pb=!3m2!1sen!2see!4v1619338030397!5m2!1sen!2see!6m8!1m7!1sLQKqaFHtV1YS0m446FrBFw!2m2!1d59.35149433713514!2d24.61028993865215!3f281.89114672038!4f2.1778810483039877!5f0.7820865974627469" width="600" height="450"></iframe>
                <p className="mb-5">
                  Üleandmine võib olla ka täiesti kontaktivaba. Näiteks: lepime kellaaja kokku ja jäta oma ratas maja ette või värava taha. Peale rattahooldust lepime aja kokku ja toome hooldatud jalgratta kokku lepitud kohta tagasi.
                            </p>
                <p className="mb-5 mt-5">.</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Meist;
