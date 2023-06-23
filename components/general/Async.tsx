import { useEffect, useState } from 'react';

interface AsyncProps {
    children: Promise<React.ReactNode>;
}

export default function Async({ children }: AsyncProps) {
    const [resolvedChildren, setResolvedChildren] = useState<React.ReactNode | null>(null);

    // When the component is mounted, resolve the Promise
    useEffect(() => {
        if (children) {
            children.then((result) => {
                setResolvedChildren(result);
            });
        }
    }, [children]);

    // If the Promise has not been resolved yet, return null
    if (resolvedChildren === null) {
        return null;
    }

    // Otherwise, return the resolved JSX.Element
    return <>{resolvedChildren}</>;
}