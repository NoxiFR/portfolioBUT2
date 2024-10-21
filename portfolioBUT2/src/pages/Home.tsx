//class de la page home
import React from "react";
import Presentation from "../components/home/presentation.tsx";
import Competences from "../components/home/competences.tsx";

class Home extends React.Component {
    render() {
        return (
            <div className={'homePage'}>
                <Presentation/>
                <Competences/>
            </div>
        );
    }
}

export default Home;