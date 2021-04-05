import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
    };

    ReactGA.initialize('G-ZF1NJVRHME', {
      debug: true,
      titleCase: false,
      gaOptions: {
        siteSpeedSampleRate: 100
      }
    });
    ReactGA.pageview(window.location.pathname);

  }

  componentDidMount() {
    this.setState({
      resumeData: {
        "main": {
          "name": "Michal Mrázek",
          "occupation": "Data Engineer / Data Scientist",
          "description": "",
          "image": "profilepic2.png",
          "bio": "Hi! I am a Data Scientist / Data Engineer with worldwide experience (United States, Germany and Czech republic) mainly focused on applied statistics, machine learning and currently also data engineering and cloud computing. If you are interested, reach out to me :)",
          "contactmessage": "Here is where you should write your message to readers to have them get in contact with you.",
          "email": "michalmrazek9@gmail.com",
          "phone": "+420 739 284 980",
          "address": {
            "city": "Brno"
          },
          "website": "https://www.linkedin.com/in/michal-mrazek/",
          "resumedownload": "https://michalmrazek-public.s3.eu-central-1.amazonaws.com/CV_Michal_Mrazek.pdf",
          "social": [
            {
              "name": "linkedin",
              "url": "https://www.linkedin.com/in/michal-mrazek/",
              "className": "fab fa-linkedin-in"
            },
            {
              "name": "email",
              "url": "mailto:michalmrazek@gmail.com",
              "className": "fas fa-envelope"
            },
            {
              "name": "instagram",
              "url": "https://www.instagram.com/cheddar_inst/",
              "className": "fab fa-instagram"
            }
          ]
        },
        "resume": {
          "skillmessage": "Some of my most noticable skills",
          "education": [
            {
              "school": "Brno University of Technology",
              "degree": "Mathematical Engineering",
              "graduated": "2013 - 2019",
              "description": "Degree focus on applied mathematics in engineering (optimization, computing, statistics). Masters degree on Data Mining (A grade)."
            },
            {
              "school": "Chalmers University of Technology",
              "degree": "Engineering Mathematics and Computational Science",
              "graduated": "2016 - 2017",
              "description": "Exchange student at one of Scandinavia's most prestigeus technical univertisty with focus on computational science."
            }
          ],
          "work": [
            {
              "company": "Kiwi.com",
              "title": "Data Engineer",
              "years": "February 2020 - Present",
              "description": "Developing custom ETL tool based on Apache Airflow running in Kuberentes on Google Cloud Platform. Data transfers between various data sources (Postgres, BigQuery, GCS, ElasticSearch, web scrapping, etc.)"
            },
            {
              "company": "Deutsche Telekom Services Europe",
              "title": "Data Scientist",
              "years": "July 2019 - January 2020",
              "description": "Responsible for project focused on predicting correct accounts and tax based on received invoices."
            },
            {
              "company": "Tieto",
              "title": "AI Software Developer Intern",
              "years": "February 2019 - April 2019",
              "description": "Development of autonomous driving model (line follower). Implementation of basic deep learning models in Keras and hardware construction."
            },
            {
              "company": "Bosch Center for Artificial Intelligence, Sunnyvale (CA), USA",
              "title": "Data Analyst Intern",
              "years": "March 2018 - August 2018",
              "description": "Improved chi squared test using Monte Carlo Simulation in Spark. Developing of general data analytic platform for manufacturing based on Apache Spark, visualization in Tableau."
            },
            {
              "company": "Robert Bosch GmbH, Bamberg, DE",
              "title": "Junior Data Scientist",
              "years": "July 2017 - September 2017",
              "description": "Feature selection for finding weak spots in production line using mutual information and elastic net."
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Skills />
        <Resume data={this.state.resumeData.resume} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}
export default App;
