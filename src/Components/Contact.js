import React, { Component } from 'react';
// import { Button, Linking } from 'react';

class Contact extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1>Get in touch.</h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

                  <ul className="social-links">
                     <li><a title="Back to Top" href="#home"><i className="fa fa-envelope fa-5x"></i></a></li>
                     <li><a title="Back to Top" href="#home"><i className="fa fa-envelope fa-5x"></i></a></li>
                  </ul>
               </div>

            </div>
         </section>
      );
   }
}

export default Contact;
