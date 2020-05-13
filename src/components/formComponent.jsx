import React, { Component } from 'react';


class FormComponent extends Component {

    render() {
        return (

            <div className="lead text-center w-100 mt-4">
                <p>{this.props.formMessage}</p>
                <form name="contact" method="post" action="/success">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <input required className="pt-3 pb-3 pl-5 pr-5" placeholder="Nimi" type="text" name="name" />
                    </p>
                    <p>
                        <input readOnly value={this.props.formOrigin} hidden className="pt-3 pb-3 pl-5 pr-5" type="text" name="origin" />
                    </p>
                    <p>
                        <input required className="pt-3 pb-3 pl-5 pr-5" placeholder="Email" type="email" name="email" />
                    </p>

                    {this.props.tel &&
                        <p>
                            <input required className="pt-3 pb-3 pl-5 pr-5" placeholder="Telefon" type="tel" name="telephone" />
                        </p>
                    }

                    <p>
                        <textarea required className="pt-3 pb-3 pl-5 pr-5" placeholder="Tekst" name="message"></textarea>
                    </p>
                    <p>
                        <button className="btn btn-dark font-weight-bold m-4 pt-3 pb-3 pl-5 pr-5" type="submit">Saada</button>
                    </p>
                </form>
            </div>
        );
    }
}

export default FormComponent;