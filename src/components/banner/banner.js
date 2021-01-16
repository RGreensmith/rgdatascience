import './banner.scss';

const Banner = ({ children }) => (
    <div className="banner">
        <h1 className="banner_title">{children}</h1>
    </div>
);

export default Banner;