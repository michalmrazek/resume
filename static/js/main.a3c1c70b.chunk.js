(this["webpackJsonpmichal-resume"]=this["webpackJsonpmichal-resume"]||[]).push([[0],{16:function(e,s,a){},17:function(e,s,a){},20:function(e,s,a){"use strict";a.r(s);var t=a(0),i=a(1),c=a(9),n=a.n(c),r=(a(7),a(16),a(2)),l=a(3),o=a(5),d=a(4),j=a(10),h=a.n(j),m=(a(17),function(e){Object(o.a)(a,e);var s=Object(d.a)(a);function a(){return Object(r.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=this.props.data.occupation,a=(this.props.data.description,this.props.data.address.city,this.props.data.social.map((function(e){return Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:e.url,children:Object(t.jsx)("i",{className:e.className})})},e.name)})));return Object(t.jsxs)("header",{id:"home",children:[Object(t.jsx)("nav",{id:"nav-wrap",className:"z-depth-0",children:Object(t.jsx)("div",{class:"brand-logo center",children:Object(t.jsxs)("ul",{id:"nav",className:"nav right",children:[Object(t.jsx)("li",{className:"current",children:Object(t.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#skills",children:"Skills"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})})]})})}),Object(t.jsx)("div",{className:"row banner",children:Object(t.jsxs)("div",{className:"banner-text",children:[Object(t.jsxs)("h1",{className:"responsive-headline",children:["I'm ",e,"."]}),Object(t.jsxs)("h3",{children:["I'm a ",Object(t.jsx)("span",{children:s})," technology enthusiast and passionat learner, currently employed by Kiwi.com. I have worked on various projects ranging from ",Object(t.jsx)("span",{children:"ETL pipelines"})," to ",Object(t.jsx)("span",{children:"machine learning"})," to ",Object(t.jsx)("span",{children:"data vizualization"}),"."]}),Object(t.jsx)("hr",{}),Object(t.jsx)("ul",{className:"social",children:a})]})}),Object(t.jsx)("p",{className:"scrolldown",children:Object(t.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(t.jsx)("i",{className:"icon-down-circle"})})})]})}}]),a}(i.Component)),p=function(e){Object(o.a)(a,e);var s=Object(d.a)(a);function a(){return Object(r.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:e.url,children:Object(t.jsx)("i",{className:e.className})})},e.name)}));return Object(t.jsx)("footer",{children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"twelve columns",children:[Object(t.jsx)("ul",{className:"social-links",children:e}),Object(t.jsxs)("ul",{className:"copyright",children:[Object(t.jsx)("li",{children:"\xa9 Copyright 2020 Michal Mr\xe1zek"}),Object(t.jsxs)("li",{children:["Based on template by ",Object(t.jsx)("a",{title:"Tim Baker",href:"https://github.com/tbakerx/react-resume-template",children:"Tim Baker"})]})]})]}),Object(t.jsx)("div",{id:"go-top",children:Object(t.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(t.jsx)("i",{className:"icon-up-open"})})})]})})}}]),a}(i.Component),b=function(e){Object(o.a)(a,e);var s=Object(d.a)(a);function a(){return Object(r.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s="images/"+this.props.data.image,a=this.props.data.bio,i=(this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone),c=this.props.data.email,n=this.props.data.resumedownload;return Object(t.jsx)("section",{id:"about",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"three columns",children:Object(t.jsx)("img",{className:"profile-pic",src:s,alt:"Michal Mr\xe1zek Profile Pic"})}),Object(t.jsxs)("div",{className:"nine columns main-col",children:[Object(t.jsx)("h2",{children:"About Me"}),Object(t.jsx)("p",{children:a}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"columns contact-details",children:[Object(t.jsx)("h2",{children:"Contact Details"}),Object(t.jsxs)("p",{className:"address",children:[Object(t.jsx)("span",{children:e}),Object(t.jsx)("br",{}),Object(t.jsx)("span",{children:i}),Object(t.jsx)("br",{}),Object(t.jsx)("span",{children:c})]})]}),Object(t.jsx)("div",{className:"columns download",children:Object(t.jsx)("p",{children:Object(t.jsxs)("a",{href:n,className:"button",children:[Object(t.jsx)("i",{className:"fa fa-download"}),"Download PDF Resume"]})})})]})]})]})})}}]),a}(i.Component),u=function(e){Object(o.a)(a,e);var s=Object(d.a)(a);function a(){return Object(r.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.education.map((function(e){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:e.school}),Object(t.jsxs)("p",{className:"info",children:[e.degree," ",Object(t.jsx)("span",{children:"\u2022"}),Object(t.jsx)("em",{className:"date",children:e.graduated})]}),Object(t.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.work.map((function(e){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:e.company}),Object(t.jsxs)("p",{className:"info",children:[e.title,Object(t.jsx)("span",{children:"\u2022"})," ",Object(t.jsx)("em",{className:"date",children:e.years})]}),Object(t.jsx)("p",{children:e.description})]},e.company)}));this.props.data.skills.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(t.jsxs)("li",{children:[Object(t.jsx)("span",{style:{width:e.level},className:s}),Object(t.jsx)("em",{children:e.name})]},e.name)}))}return Object(t.jsxs)("section",{id:"resume",children:[Object(t.jsxs)("div",{className:"row education",children:[Object(t.jsx)("div",{className:"three columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Education"})})}),Object(t.jsx)("div",{className:"nine columns main-col",children:Object(t.jsx)("div",{className:"row item",children:Object(t.jsx)("div",{className:"twelve columns",children:e})})})]}),Object(t.jsxs)("div",{className:"row work",children:[Object(t.jsx)("div",{className:"three columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Work"})})}),Object(t.jsx)("div",{className:"nine columns main-col",children:s})]})]})}}]),a}(i.Component),O=(a(8),function(e){Object(o.a)(a,e);var s=Object(d.a)(a);function a(){return Object(r.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillName,s=this.props.data.skillIconSrc,a=this.props.data.skillDescription,i=this.props.data.label;return Object(t.jsx)("div",{className:"col s12 m6 l4",children:Object(t.jsxs)("div",{className:"card small",children:[Object(t.jsxs)("div",{class:"card-content",children:[Object(t.jsxs)("div",{className:"center fa-7x",children:[i?Object(t.jsx)("span",{class:"new badge skill-label right","data-badge-caption":i}):null,Object(t.jsx)("img",{className:"svg-logo",src:s,alt:"Skill Logo"})]}),Object(t.jsxs)("span",{className:"card-title activator",children:[e,Object(t.jsx)("i",{className:"right fas fa-info-circle"})]}),Object(t.jsx)("p",{className:"text-overflow activator",children:a})]}),Object(t.jsxs)("div",{class:"card-reveal",children:[Object(t.jsxs)("span",{class:"card-title",children:[Object(t.jsx)("img",{className:"svg-logo fa-1x",src:s,alt:"Skill Logo"}),Object(t.jsx)("i",{class:"right fas fa-times-circle"})]}),Object(t.jsx)("p",{children:a})]})]})})}}]),a}(i.Component)),x=(a(18),a.p+"static/media/cib-apache-airflow.44e0aec7.svg"),f=a.p+"static/media/kubernetes-icon.f91022b1.svg",v=a.p+"static/media/apache-spark.14e4fd1f.svg",g=a.p+"static/media/python-logo.063da199.svg",k=a.p+"static/media/docker-logo.ee6ee507.svg",w=a.p+"static/media/aws-logo.cc38dbe9.svg",N=a.p+"static/media/r-logo.2da55f92.svg",y=a.p+"static/media/robot-logo.4ef33688.svg",I=a.p+"static/media/postgres-logo.29aef667.svg",D=a.p+"static/media/tableau-logo.be3c5104.svg",S=a.p+"static/media/react-logo.6c1d44b8.svg",A=a.p+"static/media/d3-logo.f43e322e.svg",C=a.p+"static/media/golang-logo.73c6dbd9.svg",z=function(e){Object(o.a)(a,e);var s=Object(d.a)(a);function a(){return Object(r.a)(this,a),s.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.state=[{skillName:"Python",skillIconSrc:g,skillDescription:"I have been using python extensively since 2017 for various projects in fields of data science, machine learning, data engineering & data processing and more."},{skillName:"Docker",skillIconSrc:k,skillDescription:"I dockerized an application for classifing invoices and I use docker pretty much on daily basis including docker-compose."},{skillName:"Kubernetes",skillIconSrc:f,skillDescription:"I have been using Kuberentes for over a year and have experience with depoying new workloads, services, secrets & configmaps ande debugging."},{skillName:"Apache Airflow",skillIconSrc:x,skillDescription:"I am working daily with Airflow, developing new pipelines and operators and maintaing the Airflow instance. Recently I focused on upgrade to Airflow 2.0. "},{skillName:"Apache Spark",skillIconSrc:v,skillDescription:"I developed chi-square test using Monte Carlo in partitions improving both speed and accuracy of statistical test. Most of the work was done on Spark 2.0, but recently I developed simple data pipeline in Spark 3.0."},{skillName:"R language",skillIconSrc:N,skillDescription:"R was my gateway to data science. We used it for custom web-based time series anomaly detection and visualization with Plotly and multiple small data analyses."},{skillName:"Machine Learning",skillIconSrc:y,skillDescription:"I wrote a Masters thesis on NLP and dimensionality reduction (with grade A). I was in charge of an app classifying invoices for DTSE and also for one simple AI project (line-follower) for Tieto company."},{skillName:"Databases",skillIconSrc:I,skillDescription:"I work with multiple SQL and noSQL databases. Most experience comes from Postgres and BigQuery, but I have also got my hands on Redis, ElasticSearch, DynamoDB, Firestore and possibly others."},{skillName:"Vizualization",skillIconSrc:D,skillDescription:"I helped my team to set up vizualizations in Tableau and Power BI."},{skillName:"AWS",skillIconSrc:w,skillDescription:"I am learning AWS in my free time and got enthusiastic about serverless computing. Currently prepairing for the AWS Certified Solutions Architect certification."},{skillName:"React",skillIconSrc:S,skillDescription:"I have learnt some basics of web development, including React and Node.js in my free time. I build this website with React and had one side job with Node.js and ejs.",label:"Basics"},{skillName:"D3.js",skillIconSrc:A,skillDescription:"I have been experimenting recently with D3.js vizualizations and got really excited about it. I hope to learn more in the future.",label:"Basics"},{skillName:"Golang",skillIconSrc:C,skillDescription:"I am currently learning Go, get in touch with me if you want to know more.",label:"Currently learning"}],Object(t.jsx)("section",{id:"skills",children:Object(t.jsxs)("div",{className:"row skills",children:[Object(t.jsx)("div",{className:"three columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Skills"})})}),Object(t.jsx)("div",{className:"nine columns main-col",children:Object(t.jsx)("div",{className:"row",children:this.state.map((function(e){return Object(t.jsx)(O,{data:e})}))})})]})})}}]),a}(i.Component),R=function(e){Object(o.a)(a,e);var s=Object(d.a)(a);function a(e){var t;return Object(r.a)(this,a),(t=s.call(this,e)).state={foo:"bar",resumeData:{}},t}return Object(l.a)(a,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(m,{data:this.state.resumeData.main}),Object(t.jsx)(b,{data:this.state.resumeData.main}),Object(t.jsx)(z,{data:this.state.resumeData.resume}),Object(t.jsx)(u,{data:this.state.resumeData.resume}),Object(t.jsx)(p,{data:this.state.resumeData.main})]})}}]),a}(i.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(t.jsx)(R,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/resume",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/resume","/service-worker.js");B?function(e){fetch(e).then((function(s){404===s.status||-1===s.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):M(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.a3c1c70b.chunk.js.map