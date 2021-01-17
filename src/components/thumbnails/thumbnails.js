import { Link } from 'react-router-dom';
import './thumbnails.scss';

const Thumbnails = ({ pages }) => (
    <div className="thumbnails">
        {pages.map(({ title, path, image }) => (
            <div className="thumbnail" style={{ backgroundImage: `url(${image})`}}>
                <Link to={path}>{title}</Link>
            </div>
        ))}
    </div>
);

export default Thumbnails;