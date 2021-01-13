
import './page.css';

const Page = ({description: { title, content }}) => (
    <div className="App">
        <h1 className={title.className}>{title.content}</h1>
        {content.map(({ type, items, content, path }) => {
            if (type === 'list') {
                return (
                    <ul>
                        {items.map((name) => <li>{name} </li>)}
                    </ul>
                );
            } else if (type === 'paragraph') {
                return <p>{content}</p>;
            } else if (type === 'subheading') {
                return <h4>{content}</h4>;
            } else if (type === 'image') {
                return <img src={content} />
            }

            return '';
        })}
    </div>
);

export default Page;
