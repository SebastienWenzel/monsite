import Header from '../components/headercv/Header';
import Cv from '../../src/assets/img/cv.png'
const Vitae = () => {
    return (
        <div>
            <Header/>
            <article className='article'>
                <div className='article--title'>
                    <h2>Information</h2>
                </div>
                <figure className='article--img'>
                    <img src={Cv} alt='cv'/>
                </figure>

            </article>
        </div>
    );
};

export default Vitae;