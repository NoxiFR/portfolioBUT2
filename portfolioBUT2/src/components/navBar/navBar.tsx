import NavBarLink from "./navBarLink.tsx";

const NavBar = () => {
    return (
        <div className="navBarDiv">
            <div>
                <h1>Correard Nolan</h1>
                <h2>Developpeur Informatique</h2>
            </div>
            <div>
                <ul>
                    <NavBarLink to={'/'} text={"Accueil"} />
                    <NavBarLink to={'/projects'} text={"Projets"} />
                    <NavBarLink to={'/contact'} text={"Contact"} />
                </ul>
            </div>
        </div>
    );
};

export default NavBar;