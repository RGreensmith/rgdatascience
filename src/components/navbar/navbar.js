
import './navbar.css';

const Navbar = ({description: { title, content }}) => (
    <div className="navbar">
        <div className="banner">
            <h1 className="banner_title">{title.content}</h1>
        </div>
        {content.map(({ type, items, content, className }) => {
            className = className || '';
            if (type === 'list') {
                return (
                    <ul>
                        {items.map((name) => <li>{name} </li>)}
                    </ul>
                );
            } else if (type === 'paragraph') {
                return <p className={className} >{content}</p>;
            } else if (type === 'subheading') {
                return <h4>{content}</h4>;
            } else if (type === 'subheading2') {
                return <h3>{content}</h3>;
            } else if (type === 'image') {
                return <img src={content} className={className} alt=""/>
            }

            return '';
        })}
    </div>

);

export default Navbar;
