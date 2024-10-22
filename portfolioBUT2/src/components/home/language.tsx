import React from "react";

interface LanguageProps {
    img: string;
    imgAlt: string;
    name: string;
    progression: string;
}

class Language extends React.Component<LanguageProps> {
    render() {
        return (
            <div className={'language'}>
                <div className={'languageImg'}>
                    <img src={this.props.img} alt={this.props.imgAlt}/>
                    <p>{this.props.name}</p>
                </div>
                <div className={'languageBarre'}>
                    <div className={'languageBarreProgression ' + this.props.name}></div>
                </div>
                <p>{this.props.progression}</p>
            </div>
        );
    }
}

export default Language;