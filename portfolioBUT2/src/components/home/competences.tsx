import React from "react";
import CompetencesSkills from "./competencesSkills.tsx";
import TimeLineText from "./timeLineText.tsx";
import Language from "./language.tsx";


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
                            <CompetencesSkills img={'/src/assets/images/home/competences/flexibilite.png'} imgAlt={'flexibilite'} text={'Adaptabilite'}/>
                            <CompetencesSkills img={'/src/assets/images/home/competences/sablier.png'} imgAlt={'Sablier'} text={'Gestion du Temps'}/>
                            <CompetencesSkills img={'/src/assets/images/home/competences/diplome.png'} imgAlt={'Chapeu de diplome'} text={'Autodidacte'}/>
                        </div>
                    </div>
                    <div className={'deux'}>
                        <h1>Formation</h1>
                        <div className={'timeLineBox'}>
                            <div className={'timeLine'}></div>
                            <div className={'timeLineList'}>
                                <TimeLineText title={'2023 - Baccalauréat - Lycée Choiseul, 37000'}>
                                    <p>
                                        Spécialités :
                                        <ul>
                                            <li>Mathematiques</li>
                                            <li>Physique</li>
                                            <li>NSI</li>
                                        </ul>
                                    </p>
                                </TimeLineText>
                                <TimeLineText title={'2023->Maintenant - BUT Informatique - IUT2, 3800'}>
                                    <p>
                                        Actuellement en 2ème année de BUT Informatique
                                    </p>
                                </TimeLineText>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={'part2'}>
                    <div className={'deux'}>
                        <h1>Experience Professionel</h1>
                        <div className={'timeLineBox'}>
                            <div className={'timeLineList'}>
                                <TimeLineText title={'Eté 2022 - Aide Couvreur - ARC37, 37330'}>
                                    <p>
                                        Travail d’été sans aucune expérience précédente.
                                        <br/><br/>
                                        Objectif : Aider un couvreur pour la manutention et les tâches simples
                                        <br/><br/>
                                        Compétences Travaillées :
                                        <ul>
                                            <li>Entraide</li>
                                            <li>Adaptabilité</li>
                                        </ul>
                                    </p>
                                </TimeLineText>
                                <TimeLineText title={'Eté 2023 - Aide Maçon - Hubert Arnaud, 37340'}>
                                    <p>
                                        Objectif : Aider une petite équipe de maçons pour la manutention et les tâches simples
                                        <br/><br/>
                                        Compétences Travaillées :
                                        <ul>
                                            <li>Travail d’équipe</li>
                                            <li>Adaptabilité</li>
                                        </ul>
                                    </p>
                                </TimeLineText>
                                <TimeLineText title={'Déc 2023 - Avr 2024  - Equipier - McDo, 38000'}>
                                    <p>
                                        Objectif : Equipier cuisine à McDo
                                        <br/><br/>
                                        Compétences Travaillées :
                                        <ul>
                                            <li>Travail d’équipe</li>
                                            <li>Rapidité d’apprentissage</li>
                                            <li>Gestion de la pression</li>
                                            <li>Adaptabilité</li>
                                        </ul>
                                    </p>
                                </TimeLineText>
                                <TimeLineText title={'Eté 2024  - Agent de Service Hospitalier - 37230'}>
                                    <p>
                                        Objectif : S’occuper d’une cafétaria en autonomie au sein d’un centre hospitalier.
                                        <br/><br/>
                                        Compétences Travaillées :
                                        <ul>
                                            <li>Communication</li>
                                            <li>Autonomie</li>
                                        </ul>
                                    </p>
                                </TimeLineText>
                            </div>
                            <div className={'timeLine'}></div>
                        </div>
                    </div>
                    <div className={'un'}>
                        <h1>Langages</h1>
                        <Language img={'/src/assets/images/home/languages/html.png'} imgAlt={'HTML'} name={'HTML'} progression={'Maîtrise Complete'}/>
                        <Language img={'/src/assets/images/home/languages/css.png'} imgAlt={'CSS'} name={'CSS'} progression={'Maîtrise Tres Approfondie'}/>
                        <Language img={'/src/assets/images/home/languages/react.png'} imgAlt={'React'} name={'React'} progression={'Apprentissage en Autodidactie'}/>
                        <Language img={'/src/assets/images/home/languages/java.png'} imgAlt={'Java'} name={'Java'} progression={'Maîtrise Appronfondie'}/>
                        <Language img={'/src/assets/images/home/languages/cpp.png'} imgAlt={'Cpp'} name={'Cpp'} progression={'Maitrise Partielle'}/>
                        <Language img={'/src/assets/images/home/languages/python.png'} imgAlt={'Python'} name={'Python'} progression={'Maitrise Approfondie'}/>
                    </div>

                </div>

            </div>
        );
    }
}

export default Competences;