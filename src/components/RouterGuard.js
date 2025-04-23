"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const RouterGuard = ({ children }) => {
    const [routerReady, setRouterReady] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (router) {
            setRouterReady(true);
        }
    }, [router]);

    if (!routerReady) {
        return null; // o un spinner de carga
    }

    return children;
};

export default RouterGuard;