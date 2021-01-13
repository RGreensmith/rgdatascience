
import './page.css';

const Page = ({description: { title, content }}) => (
    <div className="page">
        <h1 className={title.className || ''}>{title.content}</h1>
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
                return <img src={content} className={className} />
            }

            return '';
        })}
    </div>
);

export default Page;
