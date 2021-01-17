import { useEffect } from 'react';
import Banner from '../banner';
import './page.scss';

const Page = ({description: { title, content }}) => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [title, content]);

    return (<div className="page">
        <Banner>
            {title.content}
        </Banner>
        <div className="pageContainer">
            <div className="textContainer">
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
        </div>
    </div>);
};

export default Page;