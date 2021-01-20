import { useEffect } from 'react';
import Banner from '../banner';
import ReferencePopover from '../referencePopover';
import './page.scss';

const Page = ({description: { title, content }}) => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [title, content]);
    let isFirstVid = true;
    return (<div className="page">
        <Banner>
            {title.content}
        </Banner>
        <div className="pageContainer">
            <div className="textContainer">
                {content.map(({ type, items, content, className, path, reference }) => {
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
                    } else if (type === 'link') {
                        return <a target="_blank" rel="noreferrer" href={path}>{content}</a>
                    } else if (type === 'referencePopover') {
                        
                        return (
                            <ReferencePopover reference={reference} className={className}>
                                {content}
                            </ReferencePopover>
                        );
                    } else if (type === 'video') {
                        const autoPlay=isFirstVid;
                        isFirstVid=false; 
                        return <video width="100%" height="auto" controls autoPlay={autoPlay}>
                            <source src={content} type="video/mp4"/></video>
                    }
                    return '';
                })}
            </div>
        </div>
    </div>);
};

export default Page;