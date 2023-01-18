import CardVersionOne from './card-version-one';
import CardVersionTwo from './card-version-two';
import Social from './social';
import Map from './map';

function Main () {
    return (
        <div className="main" 
            style={{
                backgroundImage: `url(assets/kolla_background.jpg)`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
                }}
        >

            <div className="container">
                <div className="main__inner">
                    <div className='main__header'>
                        <div className='main__header__content'>open{"\n"}discussion{"\n"}platform</div>
                    </div>
                    <div className='main__item'>face</div>
                    <div className='main__item__box'>
                        <div className='main__item__content main__item'>to face</div>
                    </div>
                </div>
            </div>
            <CardVersionOne /> 
            <CardVersionTwo /> 
            <Social />
            <Map />

        </div>
    );
}

export default Main;