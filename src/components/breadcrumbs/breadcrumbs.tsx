'use client';
import s from './breadcrumbs.module.scss'

import {Breadcrumbs as AriaBreadcrumbs, Breadcrumb as AriaBreadcrumb, Link} from 'react-aria-components';
import {SlashIcon} from '@radix-ui/react-icons';
import {usePathname, useRouter} from 'next/navigation';
import {useEffect} from 'react';

export default function Breadcrumbs() {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (router) {

            const pathArray = pathname.split(/\//);

        }
    }, [router]);

    return (
        <div className={s.section}>
            <AriaBreadcrumbs className={s.breadcrumbs}>
                <AriaBreadcrumb className={s.breadcrumb} aria-label="hello">
                    <Link className={s.link} href="/">Home</Link>
                    <SlashIcon />
                </AriaBreadcrumb>
                <AriaBreadcrumb className={s.breadcrumb} aria-label="hello">
                    <Link className={s.link} href="/react-aria/">React Aria</Link>
                    <SlashIcon />
                </AriaBreadcrumb>
                <AriaBreadcrumb className={s.breadcrumb} aria-label="hello">
                    <Link className={s.link}>Breadcrumbs</Link>
                </AriaBreadcrumb>
            </AriaBreadcrumbs>
        </div>
    )
}