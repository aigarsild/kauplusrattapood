import React, { Component } from 'react';

import lihthooldusImg from '../images/lihthooldus.png';
import taishooldusImg from '../images/taishooldus.png';
import toodImg from '../images/ylejaanud.png';
import wheelImg from '../images/kysimused.png';

import Form from './formComponent';

class pricesComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showForm: false,
            subject: ''
        }

    }

    handleClick(e) {
        const subject = e.target.dataset.btn;

        this.setState({
            showForm: !this.state.showForm,
            subject: subject
        });

    }

    render() {
        return (
            <div>

                {this.state.showForm &&
                    <div className="price-form modal" role="dialog" >
                        <div className="modal-dialog shadow" role="document">
                            <div className="modal-content border-0">
                                <div className="modal-header">
                                    <h5 className="modal-title font-weight-bold">{this.state.subject}</h5>
                                    <button onClick={this.handleClick.bind(this)} onKeyDown={this.handleClick.bind(this)} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <Form tel="true" formMessage="Jätke meile oma andmed ja me võtame peatselt ühendust" formOrigin={this.state.subject} />
                                </div>

                            </div>
                        </div>
                    </div>
                }

                <h2 className="display-4 text-center w-100 font-weight-bold mb-5 mt-5">Hinnakiri</h2>
                <div className="row justify-content-center">
                    <div data-sal="zoom-in"
                        data-sal-delay="100"
                        data-sal-easing="ease"
                        data-sal-duration="500" className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="card border-0 shadow">
                            <img src={lihthooldusImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="card-title font-weight-bold">Lihthooldus 35€</h2>
                                <div className="card-text font-weight-light">
                                    <ul className="list-unstyled">
                                        <span className="font-weight-bold mb-2">Lihthooldus sisaldab:</span>
                                        <li className="mb-2">
                                            käikude, koonuste, pidurite, kaelakausside reguleerimine, jooksude rihtimine, keti õlitamine, kummide pumpamine
                                       </li>
                                        <li className="mb-2">lihtsamate osade vahetamine (kett, piduriklotsid, tross jne)</li>
                                        <li className="mb-2">edasise hoolduse soovitused</li>
                                        <li className="mb-2">hind ei sisalda varuosi</li>
                                    </ul>
                                </div>
                                <p data-btn="Lihthooldus" onClick={this.handleClick.bind(this)} onKeyDown={this.handleClick.bind(this)} className="shadow btn btn-dark font-weight-bold pt-3 pb-3 pl-5 pr-5">Telli pakett</p>
                            </div>
                        </div>
                    </div>
                    <div data-sal="zoom-in"
                        data-sal-delay="200"
                        data-sal-easing="ease"
                        data-sal-duration="500" className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="card border-0 shadow">
                            <img src={taishooldusImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="card-title font-weight-bold">Täishooldus 75€</h2>
                                <div className="card-text font-weight-light">
                                    <ul className="list-unstyled">
                                        <span className="font-weight-bold mb-2">Täishoolduse korral lisandub lihthooldusele:</span>
                                        <li className="mb-2">rummude, kaelakausside ja keskjooksu puhastamine/määrimine</li>
                                        <li className="mb-2">kõikide vahetamist vajavate osade vahetus</li>
                                        <li className="mb-2">hind ei sisalda varuosi</li>
                                    </ul>
                                </div>
                                <p data-btn="Täishooldus" onClick={this.handleClick.bind(this)} onKeyDown={this.handleClick.bind(this)} className="shadow btn btn-dark font-weight-bold pt-3 pb-3 pl-5 pr-5">Telli pakett</p>
                            </div>
                        </div>
                    </div>
                    <div data-sal="zoom-in"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        data-sal-duration="500" className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="card border-0 shadow">
                            <img src={toodImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="card-title font-weight-bold">Ülejäänud tööd</h2>
                                <div className="card-text font-weight-light">
                                    <ul className="list-unstyled">
                                        
                                        <li className="mb-2">Ekspress hooldus 95€</li>
                                        <li className="mb-2">Töökoja töötund 35€</li>
                                        <li className="mb-2">Väiksemad tööd nagu sisekummi vahetus jms lisandub väljasõidu hind 10€</li>
                                    </ul>
                                </div>
                                <p data-btn="Ülejäänud tööd" onClick={this.handleClick.bind(this)} onKeyDown={this.handleClick.bind(this)} className="shadow btn btn-dark font-weight-bold pt-3 pb-3 pl-5 pr-5">Telli pakett</p>
                            </div>
                        </div>
                    </div>
                    <div data-sal="zoom-in"
                        data-sal-delay="100"
                        data-sal-easing="ease"
                        data-sal-duration="500" className="mb-4 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="card border-0 shadow">
                            <img src={wheelImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="card-title font-weight-bold">Ei tea mis rattal vaja teha?</h2>
                                <div className="card-text font-weight-light">
                                    <span className="mb-2">Võite ka niisama kirjutada ja räägime selgeks või tuleme kohale ja vaatame üle</span>
                                </div>
                                <p data-btn="Ei tea mis rattal vaja teha?" onClick={this.handleClick.bind(this)} onKeyDown={this.handleClick.bind(this)} className="shadow btn btn-dark font-weight-bold pt-3 pb-3 pl-5 pr-5">Kirjuta meile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default pricesComponent;