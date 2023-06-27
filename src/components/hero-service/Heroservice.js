import React from 'react';
import WorkHard from './homespeciale.jpg'
const Heroservice = () => {
    return (
        <section className='heroservice' id='about'>
            <div className='container'>
                <h2>SERVICES</h2>
                <div className='heroservice-content'>
                    <div className='img-side'>
                        <img className='img-side__main-img' src={WorkHard} alt="bureau"/>
                    </div>
                    <div className='text-side'>   
                        <div className='text-side--article'>
                            <div className='text-side--article-display'>
                                <span><i class="fa-solid fa-desktop"></i></span>
                                <h4>Responsive Design</h4>
                            </div>                           
                            <p>
                                Un site web réactif est un site web dont la conception vise, grâce aux différents principes et techniques, à offrir une consultation confortable sur des écrans de tailles très différentes.
                            </p>
                        </div>
                        <div className='text-side--article'>
                            <div className='text-side--article-display'>
                                <span><i class="fa-solid fa-code"></i></span>
                                <h4>Html / Css / Javascript </h4>
                            </div>    
                            <p>J'excelle dans la conception et la maintenance de sites web réactifs</p>
                        </div>
                        <div className='text-side--article'>
                            <div className='text-side--article-display'>
                                <span><i class="fa-solid fa-magnifying-glass"></i></span>
                                <h4>SEO</h4>
                            </div>        
                            <p>J'optimiser votre site pour qu'il remonte dans les résultats de recherche, afin d'obtenir plus de clients dans votre trafic</p>
                        </div>
                        <div className='text-side--article'>
                            <div className='text-side--article-display'>
                                <span><i class="fa-brands fa-react"></i></span>
                                <h4> Framework React</h4>
                            </div>    
                            <p>J’utilise le Framework React pour la réalisation de site complexe.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default Heroservice;