import React, { Component } from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Prices from "../components/pricesComponent"


class Hinnakiri extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Jalgratta töökoja hinnakiri" description="Siit leita jalgratta töökoja hinnakirja ka teenused" />
        <div className="container prices-section">
          <Prices></Prices>
        </div>
      </Layout>
    )
  }
}

export default Hinnakiri;
