'use client';
import s from './global-navigation.module.scss';
import {
    ArchiveIcon, AvatarIcon, BellIcon,
    BookmarkIcon, CaretDownIcon, ChatBubbleIcon,
    DashboardIcon, ExitIcon,
    IdCardIcon,
    MixerVerticalIcon,
    ReaderIcon
} from '@radix-ui/react-icons';
import {ListBox, ListBoxItem} from 'react-aria-components';
import Link from 'next/link';

import companyLogo from '@/../public/company-logo.webp';
const companyName = 'Acme Corporation';

const overviewItems = [
    {
        id: 1,
        title: 'Dashboard',
        element: <DashboardIcon />,
        route: "/portal",
    },
    {
        id: 2,
        title: 'Marketplace',
        element: <ReaderIcon />,
        route: "/portal/marketplace",
    },
    {
        id: 3,
        title: 'Account Settings',
        element: <MixerVerticalIcon />,
        route: "",
    },
    {
        id: 4,
        title: 'Order Management',
        element: <ArchiveIcon />,
        route: "",
    },
    {
        id: 5,
        title: 'Saved Lists',
        element: <BookmarkIcon />,
        route: "",
    },
    {
        id: 6,
        title: 'Billing and Payment',
        element: <IdCardIcon />,
        route: "",
    },
    {
        id: 7,
        title: 'Ticket Management',
        element: <ChatBubbleIcon />,
        route: "",
    },
]

const accountItems = [
    {
        id: 1,
        title: 'Notifications',
        element: <BellIcon />,
        route: "",
    },
    {
        id: 2,
        title: 'Profile',
        element: <AvatarIcon />,
        route: "",
    },
    {
        id: 3,
        title: 'Sign Out',
        element: <ExitIcon style={{transform: "rotateZ(180deg)"}}/>,
        route: "",
    },
]

export default function GlobalNavigation() {

    return (
        <div className={s.globalNavigation}>
            <div className={s.container}>
                <div className={s.section}>
                    <div className={s.accountInfo}>
                        <div className={s.accountInfo__logo}>
                            <img src={companyLogo.src} alt="company logo" />
                        </div>
                        <div className={s.accountInfo__name}>
                            {companyName}<CaretDownIcon />
                        </div>
                    </div>
                    <div className={s.section}>
                        <div className={s.section__header}>
                            Overview
                        </div>
                        <ListBox items={overviewItems} className={s.list}
                                 selectionMode="multiple"
                                 selectionBehavior="replace">
                            {item => (
                                <ListBoxItem href={item.route} className={s.list__item}>
                                    {item.element}{item.title}
                                </ListBoxItem>
                            )}
                        </ListBox>
                    </div>
                </div>
                <div className={s.section}>
                    <div className={s.accountManager}>

                    </div>
                    <div className={s.section}>
                        <div className={s.section__header}>
                            Account
                        </div>
                        <ListBox items={accountItems} className={s.list}
                                 selectionMode="multiple"
                                 selectionBehavior="replace">
                            {item => (
                                <ListBoxItem href={item.route} className={s.list__item}>
                                    {item.element}{item.title}
                                </ListBoxItem>
                            )}
                        </ListBox>
                    </div>
                </div>
            </div>
        </div>
    )
}