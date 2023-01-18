

function Header(){

    return (
    <header className="header">
        <div className="container">
            <div className="header__inner">
                <div className="header__logo">
                    <img src='assets/kolla_logo.svg' alt="Logo Kolla"/>
                </div>
                <div className="header__discription discription">
                    <div className="discription__inner">
                        Kolla presents public space for curated{"\n"}
                        discussions and knowledge sharing initiative
                    </div>
                    <div className="discription__inner">
                        Our mission is to create an environment for{"\n"}
                        creative personas to participate, to share and{"\n"}
                        exchange knowledge, ideas and vision for the{"\n"} 
                        future of art in the open environment of the{"\n"}
                        un-bordered island
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}

export default Header;