import React from 'react';
import Htmlicone from './logoicon/html.svg'
import Cssicone from './logoicon/cssicone.svg'
import Sassicone from './logoicon/sass.svg'
import Javascripticone from './logoicon/javascripticone.svg'
import Reacticone from './logoicon/reacticone.svg'
import Nodejsicone from './logoicon/nodejsicon.svg'
import Mongodbicone from './logoicon/mongodbicone.svg'
import Facepicture from './seeeb.png'
const Heromain = () => {
    return (
        <section className='heromain' id='home'>
                <div className='content'>
                    <div className='home__main'>
                        <div className='home__main--text'>
                            <h1>Développer<br/>Full-stack</h1>
                            <p>Bonjour, Je suis Sébastien Wenzel. Passionné par le développement, Rigoureux, Curieux et Motivé !</p>
                            <div className='span'>
                                <span className='icone'>
                                    <a href='https://www.linkedin.com/in/s%C3%A9bastien-wenzel-44b3391ba/'><i class="fa-brands fa-linkedin"></i></a>  
                                </span>
                                <span className='icone'>
                                <a href='https://github.com/xsenikx?tab=repositories'><i class="fa-brands fa-github"></i></a>
                                </span>
                            </div>
                        </div>
                        <div className='home__main--img'>
                            <img src={Facepicture} alt='face'/>
                        </div>
                    </div>
                    <div className='skills'>
                        <p>Tech Stack</p>
                        <div>
                            <ul>
                                <li><img src={Htmlicone} alt='HTML5'/></li>
                                <li><img src={Cssicone} alt='Css'/></li>
                                <li><img src={Sassicone} alt='Sass'/></li>
                                <li><img src={Javascripticone} alt='Javascript'/></li>
                                <li><img src={Reacticone} alt='React'/></li>
                                <li><img src={Nodejsicone} alt='Nodejs'/></li>
                                <li><img src={Mongodbicone} alt='Mongodb'/></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Heromain;