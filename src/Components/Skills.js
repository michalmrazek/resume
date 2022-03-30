import React, { Component } from 'react';
import SkillCard from './SkillCard'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css';

import AirflowLogo from './cib-apache-airflow.svg';
import KubernetesLogo from './kubernetes-icon.svg';
import SparkLogo from './apache-spark.svg';
import PythonLogo from './python-logo.svg';
import DockerLogo from './docker-logo.svg';
import AWSLogo from './aws-logo.svg';
import RLogo from './r-logo.svg';
import RobotLogo from './robot-logo.svg';
import PostgresLogo from './postgres-logo.svg';
import TableauLogo from './tableau-logo.svg';
import ReactLogo from './react-logo.svg';
import D3Logo from './d3-logo.svg';
import GolangLogo from './golang-logo.svg';
import GCPLogo from './google_cloud.svg';
import TerraformLogo from './terraform.svg';




class Resume extends Component {
  render() {
    this.state =
      [
        {
          skillName: 'Python',
          skillIconSrc: PythonLogo,
          skillDescription: 'I have been using python extensively since 2017 for various projects in fields of data science, machine learning, data engineering & data processing and more.',
        },
        {
          skillName: 'GCP',
          skillIconSrc: GCPLogo,
          skillDescription: 'I have been working with GCP for over two years, starting with GKE and BigQuery, recently more focuse on the new Vertex-AI platform.',
        },
        {
          skillName: 'Docker',
          skillIconSrc: DockerLogo,
          skillDescription: 'I dockerized an application for classifing invoices and I use docker pretty much on daily basis including docker-compose.',
        },
        {
          skillName: 'Kubernetes',
          skillIconSrc: KubernetesLogo,
          skillDescription: 'I have been using Kuberentes for over two years and have experience with depoying new workloads, services, secrets & configmaps and debugging.',
        },
        {
          skillName: 'Apache Airflow',
          skillIconSrc: AirflowLogo,
          skillDescription: 'I am working daily with Airflow, developing new pipelines and operators and maintaing the Airflow instance.',
        },
        {
          skillName: 'Terraform',
          skillIconSrc: TerraformLogo,
          skillDescription: 'I used Terraform and Terragrunt in multiple projects including setting up a fresh Slurm cluster on GCP from scratch with the whole project design.',
        },
        {
          skillName: 'Apache Spark',
          skillIconSrc: SparkLogo,
          skillDescription: 'I developed chi-square test using Monte Carlo in partitions improving both speed and accuracy of statistical test. Most of the work was done on Spark 2.0, but recently I developed simple data pipeline in Spark 3.0.',
        },
        {
          skillName: 'R language',
          skillIconSrc: RLogo,
          skillDescription: 'R was my gateway to data science. We used it for custom web-based time series anomaly detection and visualization with Plotly and multiple small data analyses.',
        },
        {
          skillName: 'Machine Learning',
          skillIconSrc: RobotLogo,
          skillDescription: 'I wrote a Masters thesis on NLP and dimensionality reduction (with grade A). I was in charge of an app classifying invoices for DTSE and also for one simple AI project (line-follower) for Tieto company.',
        },
        {
          skillName: 'Databases',
          skillIconSrc: PostgresLogo,
          skillDescription: 'I work with multiple SQL and noSQL databases. Most experience comes from Postgres and BigQuery, but I have also got my hands on Redis, ElasticSearch, DynamoDB, Firestore and possibly others.',
        },
        {
          skillName: 'Vizualization',
          skillIconSrc: TableauLogo,
          skillDescription: 'I helped my team to set up vizualizations in Tableau and Power BI.',
        },
        {
          skillName: 'AWS',
          skillIconSrc: AWSLogo,
          skillDescription: 'I am learning AWS in my free time and got enthusiastic about serverless computing. Currently prepairing for the AWS Certified Solutions Architect certification.',
          label: 'Basics',
        },
        {
          skillName: 'React',
          skillIconSrc: ReactLogo,
          skillDescription: 'I have learnt some basics of web development, including React and Node.js in my free time. I build this website with React and had one side job with Node.js and ejs.',
          label: 'Basics'
        },
        {
          skillName: 'D3.js',
          skillIconSrc: D3Logo,
          skillDescription: 'I have been experimenting recently with D3.js vizualizations and got really excited about it. I hope to learn more in the future.',
          label: 'Basics'
        },
        {
          skillName: 'Golang',
          skillIconSrc: GolangLogo,
          skillDescription: 'I am currently learning Go, get in touch with me if you want to know more.',
          label: 'Currently learning'
        },
      ]


    return (
      <section id="skills">

        <div className="row skills" >


          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <div className="row">


              {this.state.map((skill) =>
                <SkillCard data={skill} />)
              }


            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
