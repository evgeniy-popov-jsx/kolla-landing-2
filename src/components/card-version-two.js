function CardVersionTwo (){

    return (
        <div className="card">
            <div className="container">
                <div className="card__inner">
                    <div className="date">
                        <div className="date__number">3.12</div>
                        <div className="date__time">17:00</div>
                    </div>
                    <div className="content__reverse">
                        <div className="content__photo">
                            <img src='assets/Mike.png' alt="" />
                        </div>
                        <div className="content__info info">
                            <div className="info__lector reverse">
                                Lecture-performance by{"\n"}
                                <span>Mike Hentz</span>
                            </div>
                            <div className="info__discription reverse">
                                Atmospheric reﬂection{"\n"}
                                for a better life
                            </div>
                            <div className="info__idea reverse">
                                Showing some methods{"\n"}
                                of collective technics and{"\n"}
                                synchronisation; artistic{"\n"} 
                                research technics and examples{"\n"}
                            </div>
                            <div className="info__reg">
                                <div className="reg__reverse">
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
    
export default CardVersionTwo;