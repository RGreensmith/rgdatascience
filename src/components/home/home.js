
import pages from '../../pages';
import Thumbnails from '../thumbnails';
import './home.scss';
import Banner from '../banner/';

const Home = () => (
    <div className="home">
        <Banner>
          <span>Rose Greensmith</span> <span>Science Blog</span>
        </Banner>
        < div className="pageContainer">
            <p className="home_description" >The main topics covered by this blog include: marine biology and ecology (coming soon), physical oceanography (coming soon), 
            machine learning, statistics, programming in R (coming soon), python and the command line, and troubleshooting programme issues.</p>
            <h1 className="home_featured_articles" >Featured Articles</h1>
            <Thumbnails pages={pages}/>
        </div>
       
    </div>
);

export default Home;
