function CardVersionOne (){

    return (
        <div className="card">
            <div className="container">
                <div className="card__inner">
                    <div className="date">
                        <div className="date__number">3.12</div>
                        <div className="date__time">17:00</div>
                    </div>
                    <div className="content">
                        <div className="content__photo">
                            <img src='assets/kirill.png' alt="" />
                        </div>
                        <div className="content__info info">
                            <div className="info__lector">
                                Lecture by{"\n"}
                                <span>Kirill Preobrazhensky</span>
                            </div>
                            <div className="info__discription">
                                Video art — from{"\n"}
                                Lumière brothers{"\n"}
                                to the digital{"\n"}
                                media revolution
                            </div>
                            <div className="info__idea">
                                Revealing the author's method{"\n"}
                                of producing cultural meanings
                            </div>
                            <div className="info__reg">
                                <div className="reg">
                                    <a href="https://face-to-face-videoart.eventbrite.com/" target="_blank" rel="noopener noreferrer"> register here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
    
export default CardVersionOne;