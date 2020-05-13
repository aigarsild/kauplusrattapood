import React, { Component } from 'react';
import Layout from "../components/layout"


class Success extends Component {
    render() {
        return (
            <Layout>
            <section className="light-section d-flex align-content-center flex-wrap min-vh-100 row">
                <div className="container">
                    <div className="row">
                        <div className="lead text-center w-100">
                            <h1 className="display-4 text-center w-100 font-weight-bold mb-5">Kiri saadetud!</h1>
                            <p>Võtame teiega ühendust esimesel võimalusel</p>
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        );
    }
}

export default Success;