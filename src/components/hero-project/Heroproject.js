import PB from "./project/pb.png"
import PC from "./project/pc.png"
import PD from "./project/pd.png"
import PE from "./project/pe.png"
const Heroproject = () => {
    return (
        <section className="heroproject" id='projets'>
            <div className="heroproject--title">
                <h2>PROJETS</h2>
                <p>Quelques réalisations</p>
            </div>
            <div className="heroproject_list">            
            <article className="heroproject_list_article">
                <div className="heroproject_list_article--image">
                    <a href="https://xsenikx.github.io/WenzelSebastien_ProjetOC_4_03-03-2022-optimiser/">
                        <figure>
                            <img src={PE} alt='Ohmyfood'/>
                            <div className="loupe">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </figure>
                        
                    </a>
                </div>
                <div className="heroproject_list_article--text">
                    <p>Construisez un site e-commerce en JavaScript</p>
                    <a href="https://github.com/xsenikx/WenzelSebastien_ProjetOC_5_29-06-2022"><i class="fa-brands fa-github"></i></a>
                    <p>HTML - CSS - JavaScript</p>
                </div>
            </article>
            <article className="heroproject_list_article">
                <div className="heroproject_list_article--image">
                    <a href="https://xsenikx.github.io/WenzelSebastien_ProjetOC_4_03-03-2022-optimiser/">
                        <figure>
                            <img src={PE} alt='Ohmyfood'/>
                            <div className="loupe">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </figure>
                        
                    </a>
                </div>
                <div className="heroproject_list_article--text">
                    <p>Construisez un site e-commerce en JavaScript</p>
                    <a href="https://github.com/xsenikx/WenzelSebastien_ProjetOC_5_29-06-2022"><i class="fa-brands fa-github"></i></a>
                    <p>HTML - CSS - JavaScript</p>
                </div>
            </article>
            <article className="heroproject_list_article">
                <div className="heroproject_list_article--image">
                    <a href="https://xsenikx.github.io/WenzelSebastien_ProjetOC_4_03-03-2022-optimiser/">
                        <figure>
                            <img src={PE} alt='Ohmyfood'/>
                            <div className="loupe">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </figure>
                        
                    </a>
                </div>
                <div className="heroproject_list_article--text">
                    <p>Construisez un site e-commerce en JavaScript</p>
                    <a href="https://github.com/xsenikx/WenzelSebastien_ProjetOC_5_29-06-2022"><i class="fa-brands fa-github"></i></a>
                    <p>HTML - CSS - JavaScript</p>
                </div>
            </article>
            <article className="heroproject_list_article">
                <div className="heroproject_list_article--image">
                    <a href="https://xsenikx.github.io/WenzelSebastien_ProjetOC_4_03-03-2022-optimiser/">
                        <figure>
                            <img src={PD} alt='Ohmyfood'/>
                            <div className="loupe">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </figure>
                        
                    </a>
                </div>
                <div className="heroproject_list_article--text">
                    <p>Optimisez un site web existant</p>
                    <a href="https://github.com/xsenikx/WenzelSebastien_ProjetOC_4_03-03-2022-optimiser"><i class="fa-brands fa-github"></i></a>
                    <p>performance Accessibilité SEO</p>
                </div>
            </article>
            <article className="heroproject_list_article">
                <div className="heroproject_list_article--image">
                    <a href="https://xsenikx.github.io/WenzelSebastien_ProjetOC_3_11032021/">
                        <figure>
                            <img src={PC} alt='Ohmyfood'/>
                            <div className="loupe">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </figure>
                        
                    </a>
                </div>
                <div className="heroproject_list_article--text">
                    <p>Dynamisez une page web avec des animation</p>
                    <a href="https://github.com/xsenikx/WenzelSebastien_ProjetOC_3_11032021"><i class="fa-brands fa-github"></i></a>
                    <p>HTML - CSS <br/> SASS</p>
                </div>
            </article>
            <article className="heroproject_list_article">
                <div className="heroproject_list_article--image">
                    <a href="https://xsenikx.github.io/WenzelSebastien_ProjetOC_2_12122020/">
                        <figure>
                            <img src={PB} alt='Ohmyfood'/>
                            <div className="loupe">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </figure>
                        
                    </a>
                </div>
                <div className="heroproject_list_article--text">
                    <p>Transformez une maquette en site web avec HTML & CSS</p>
                    <a href="https://github.com/xsenikx/WenzelSebastien_ProjetOC_2_12122020"><i class="fa-brands fa-github"></i></a>
                    <p>HTML - CSS</p>
                </div>
            </article>
            </div>
        </section>
    );
};

export default Heroproject;