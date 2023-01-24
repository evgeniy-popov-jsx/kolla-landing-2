import CardVersionOne from './card-version-one';
import CardVersionTwo from './card-version-two';
import Social from './social';
import Map from './map';
import Header from './header';
import { useEffect } from 'react';




function Main () {
    useEffect(() => {
        let animItems = document.querySelectorAll("._anim-item");

        if (animItems.length > 0 ) {

        window.addEventListener('scroll', animOnScroll);
        
        function animOnScroll() {
            for ( let i = 0; i < animItems.length; i++ ) {
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 2;

                let animItemPoint = window.innerHeight - ( animItemHeight / animStart );

                if ( animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - ( window.innerHeight / animStart );
                }

                // eslint-disable-next-line no-restricted-globals
                if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    animItem.classList.remove('_active');
                }
            } 
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            return {
                top: rect.top + scrollTop, 
                left: rect.left + scrollLeft
            }
        }
    }

});
    return (
      
            <div className="main" 
                style={{
                    backgroundImage: `url(assets/kolla_background.jpg)`,
                    backgroundPosition: `center`,
                    backgroundSize: `cover`,
                    }}
            >
               
                    <Header />
               
               
                    <div className="container">
                        <div className="main__inner">
                            <div className='main__header'>
                                <div className='main__header__content _anim-item'>
                                    open{"\n"}
                                    discussion{"\n"}
                                    platform
                                </div>
                            </div>
                            <div className='main__item _anim-item'>face</div>
                            <div className='main__item__box'>
                                <div className='main__item__content main__item _anim-item'>to face</div>
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