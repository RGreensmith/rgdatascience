import { Popover } from 'react-tiny-popover';
import { useState } from 'react';
import './referencePopover.scss';

const ReferencePopover = ({ children, reference: { path, text }, className }) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [keepPopOverOpen, setKeepPopOverOpen] = useState(false);
    return (
        <Popover
            isOpen={popoverOpen}
            onClickOutside={() => {
                setPopoverOpen(false);
                setKeepPopOverOpen(false);
            }}
            positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
            content={
                <a target="_blank" href={path} rel="noreferrer">
                    {text}
                </a>
            }
        >
            <div 
                onClick={() => setKeepPopOverOpen(!keepPopOverOpen)}
                onMouseEnter={() => setPopoverOpen(true)}
                onMouseLeave={() => !keepPopOverOpen && setPopoverOpen(false)}
                className={`${className} reference-popover`}
            >
                {children}
            </div>
        </Popover>
    )
};

export default ReferencePopover;
