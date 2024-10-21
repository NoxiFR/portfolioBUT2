import React from "react";

class Presentation extends React.Component {
    render() {
        return (
            <div className={'homePresentation'}>
                <div className={'presentationTexte'}>
                    <h1>Correard Nolan</h1>
                    <p>
                        Bienvenue sur mon portfolio ! Je suis un développeur passionné avec un grand intérêt pour les technologies web et le développement logiciel. Au fil des années, j'ai perfectionné mes compétences dans divers langages de programmation et frameworks, et je suis ravi de vous présenter mon travail.
                    </p>
                    <p>
                        Dans ce portfolio, vous trouverez une collection de mes projets, chacun démontrant ma capacité à résoudre des problèmes complexes et à créer des applications efficaces et conviviales. De la conception front-end au développement back-end, je m'efforce de fournir des solutions de haute qualité qui répondent aux besoins des utilisateurs et des clients.
                    </p>
                    <p>
                        N'hésitez pas à explorer mon travail et à me contacter si vous avez des questions ou si vous souhaitez collaborer sur un projet. Merci de votre visite !
                    </p>
                </div>
                <div className={'presentationImg'}>
                    <img src={"/src/assets/images/home/presentation/etudiant.png"} alt={'developpeur'}/>
                </div>
            </div>
        );
    }
}

export default Presentation;