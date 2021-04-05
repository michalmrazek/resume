import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


class SkillCard extends Component {
    render() {

        if (this.props.data) {
            var skillName = this.props.data.skillName;
            var skillIconSrc = this.props.data.skillIconSrc;
            var skillDescription = this.props.data.skillDescription;
            var label = this.props.data.label;
        }

        return (

            <div className="col s12 m6 l4">
                <div className="card small">
                    <div className="card-content">
                        <div className="center fa-7x">
                            {label ? <span className="new badge skill-label right" data-badge-caption={label}></span> : null}
                            <img className="svg-logo" src={skillIconSrc} alt="Skill Logo" />
                        </div>
                        <span className="card-title activator">{skillName}
                            <i className="right fas fa-info-circle" />
                        </span>
                        <p className="text-overflow activator">{skillDescription}</p>
                    </div>
                    <div className="card-reveal">

                        <span className="card-title"><img className="svg-logo fa-1x" src={skillIconSrc} alt="Skill Logo" /><i className="right fas fa-times-circle" /></span>
                        <p>{skillDescription}</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default SkillCard;
