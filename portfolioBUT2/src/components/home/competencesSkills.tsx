import React from "react";

interface CompetencesSkillsProps {
    img: string;
    imgAlt: string;
    text: string;
}

class CompetencesSkills extends React.Component<CompetencesSkillsProps> {
    render() {
        return (
            <div className={'softSkill'}>
                <img src={this.props.img} alt={this.props.imgAlt}/>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default CompetencesSkills;