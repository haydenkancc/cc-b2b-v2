'use client';
import './anchor-button.module.scss';
import {Button} from 'react-aria-components';

interface AnchorButtonProps {
    className: string;
    elementId: string;
    children: React.ReactNode;
}

export default function AnchorButton({ className, elementId, children } : AnchorButtonProps) {
    return (
        <Button aria-label="hello" className={className} onPress={() => {document.getElementById(elementId)?.scrollIntoView({behavior: "smooth"})}}>
            {children}
        </Button>
    )
}