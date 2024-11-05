'use client';
import {Link, ListBox, ListBoxItem} from 'react-aria-components';
import s from './columns.module.scss';

const items = [
    {
        id: 1,
        title: 'Dropbox Biz: Advanced - 3 licenses included (30 day trial)',
        desc: 'The advanced plan on Dropbox Business gives teams as much space as they need, along with sophisticated admit, audit, security, and integration capabilities.\n' +
            '\n' +
            'The advanced plan helps your team be organized, stay focused, and get in sync. It has features not available to teams on the Standard plan, including:\n' +
            '\n' +
            'Unlimited storage: Teams on the Advanced plan get as much space as they need.\n' +
            'Team controls: Admins can enforce team invites, approve which devices team members use for work files, and even access their work accounts with sign-in as user.\n' +
            'App integrations: Single sign-on (SSO) integrations and API calls for data migrations.\n' +
            'Admin management: Access to tiered admins, which makes it easy to delegate team administration.\n' +
            'Real-time support: Access to support agents over phone, chat, or email.\n' +
            '\n' +
            'NOTE: Try Dropbox Business Advanced for 30 days. After that time your subscription will expire, unless you manually place an order to transition into a billed plan before expiration.',
        price: 'CA$4.10',
        period: 'user/month',
        itemCode: 'SWDB00105',
    },
    {
        id: 2,
        title: 'Dropbox Biz: Advanced - 3 licenses included (30 day trial)',
        desc: 'The advanced plan on Dropbox Business gives teams as much space as they need, along with sophisticated admit, audit, security, and integration capabilities.\n' +
            '\n' +
            'The advanced plan helps your team be organized, stay focused, and get in sync. It has features not available to teams on the Standard plan, including:\n' +
            '\n' +
            'Unlimited storage: Teams on the Advanced plan get as much space as they need.\n' +
            'Team controls: Admins can enforce team invites, approve which devices team members use for work files, and even access their work accounts with sign-in as user.\n' +
            'App integrations: Single sign-on (SSO) integrations and API calls for data migrations.\n' +
            'Admin management: Access to tiered admins, which makes it easy to delegate team administration.\n' +
            'Real-time support: Access to support agents over phone, chat, or email.\n' +
            '\n' +
            'NOTE: Try Dropbox Business Advanced for 30 days. After that time your subscription will expire, unless you manually place an order to transition into a billed plan before expiration.',
        price: 'CA$4.10',
        period: 'user/month',
        itemCode: 'SWDB00105',
    },
    {
        id: 3,
        title: 'Dropbox Biz: Advanced - 3 licenses included (30 day trial)',
        desc: 'The advanced plan on Dropbox Business gives teams as much space as they need, along with sophisticated admit, audit, security, and integration capabilities.\n' +
            '\n' +
            'The advanced plan helps your team be organized, stay focused, and get in sync. It has features not available to teams on the Standard plan, including:\n' +
            '\n' +
            'Unlimited storage: Teams on the Advanced plan get as much space as they need.\n' +
            'Team controls: Admins can enforce team invites, approve which devices team members use for work files, and even access their work accounts with sign-in as user.\n' +
            'App integrations: Single sign-on (SSO) integrations and API calls for data migrations.\n' +
            'Admin management: Access to tiered admins, which makes it easy to delegate team administration.\n' +
            'Real-time support: Access to support agents over phone, chat, or email.\n' +
            '\n' +
            'NOTE: Try Dropbox Business Advanced for 30 days. After that time your subscription will expire, unless you manually place an order to transition into a billed plan before expiration.',
        price: 'CA$4.10',
        period: 'user/month',
        itemCode: 'SWDB00105',
    },
    {
        id: 4,
        title: 'Dropbox Biz: Advanced - 3 licenses included (30 day trial)',
        desc: 'The advanced plan on Dropbox Business gives teams as much space as they need, along with sophisticated admit, audit, security, and integration capabilities.\n' +
            '\n' +
            'The advanced plan helps your team be organized, stay focused, and get in sync. It has features not available to teams on the Standard plan, including:\n' +
            '\n' +
            'Unlimited storage: Teams on the Advanced plan get as much space as they need.\n' +
            'Team controls: Admins can enforce team invites, approve which devices team members use for work files, and even access their work accounts with sign-in as user.\n' +
            'App integrations: Single sign-on (SSO) integrations and API calls for data migrations.\n' +
            'Admin management: Access to tiered admins, which makes it easy to delegate team administration.\n' +
            'Real-time support: Access to support agents over phone, chat, or email.\n' +
            '\n' +
            'NOTE: Try Dropbox Business Advanced for 30 days. After that time your subscription will expire, unless you manually place an order to transition into a billed plan before expiration.',
        price: 'CA$4.10',
        period: 'user/month',
        itemCode: 'SWDB00105',
    },
]

interface ColumnsProps {
    link: string;
}

export default function Columns({ link } : ColumnsProps) {
    return (
        <div className={s.section}>
            <ListBox className={s.columns} items={items} aria-label="list box">
                {item => (
                    <ListBoxItem className={s.column} aria-label="list box item">
                        <div className={s.title}>
                            {item.title}
                        </div>
                        <div className={s.price}>
                            {item.price}
                            <div className={s.price__period}>
                                &nbsp;{item.period}
                            </div>
                        </div>
                        <div className={s.desc}>
                            {item.desc}
                        </div>
                        <div className={s.itemCode}>
                            Item code: {item.itemCode}
                        </div>
                        <Link className={s.button} aria-label="select item" href={link}>
                            Select
                        </Link>
                    </ListBoxItem>
                )}
            </ListBox>
        </div>
    )
}