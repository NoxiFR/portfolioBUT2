import React from "react";
import CompetencesSkills from "./competencesSkills.tsx";


class Competences extends React.Component {
    render() {
        return (
            <div className={'competences'}>
                <div className={'part1'}>
                    <div className={'un'}>
                        <h1>Soft Skills</h1>
                        <div className={'ligne1'}>
                            <CompetencesSkills img={'/src/assets/images/home/competences/groupe.png'} imgAlt={'Equipe'} text={"Travail d'Equipe"}/>
                            <CompetencesSkills img={'/src/assets/images/home/competences/communication.png'} imgAlt={'communication'} text={'Communication'}/>
                        </div>
                        <div className={'ligne2'}>
                            <CompetencesSkills img={'/src/assets/images/home/competences/flexibilite.png'} imgAlt={'flexibilite'} text={'Flexibilite'}/>
                            <CompetencesSkills img={'/src/assets/images/home/competences/sablier.png'} imgAlt={'Sablier'} text={'Gestion du Temps'}/>
                            <CompetencesSkills img={'/src/assets/images/home/competences/diplome.png'} imgAlt={'Chapeu de diplome'} text={'Autodidacte'}/>
                        </div>
                    </div>
                    <div className={'deux'}>

                    </div>
                </div>
                <div className={'part2'}>

                </div>

            </div>
        );
    }
}

export default Competences;