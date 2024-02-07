import { useEffect, useState } from 'react';

export default function useHeight() {
    const [height, setHeight] = useState<number | null>(null);

    useEffect(() => {
        setHeight(document.body.offsetHeight);
    }, []);

    return height;
}
