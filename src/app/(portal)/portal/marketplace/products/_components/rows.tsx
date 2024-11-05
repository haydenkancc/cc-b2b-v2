'use client';
import s from './rows.module.scss';
import {ListBox, ListBoxItem} from 'react-aria-components';

import { softwareProducts } from '@/assets/software';

export default function Rows() {
    return (
        <ListBox className={s.rows} items={softwareProducts} aria-label="list box">
            {item => (
                <ListBoxItem className={s.row} href={`products/${item.id}`}>
                    <div className={s.image}>
                        <img src={item.shortSrc} alt="service plan logo" />
                    </div>
                    <div className={s.content}>
                        <div className={s.titleSection}>
                            <div className={s.titles}>
                                <div className={s.title}>
                                    {item.title}
                                </div>
                                <div className={s.shortDesc}>
                                    {item.shortDesc}
                                </div>
                            </div>
                            <div className={s.pricing__wrapper}>
                                <div className={s.pricing}>
                                    <div className={s.tag}>
                                        {item.tag}
                                    </div>
                                    <div className={s.price}>
                                        {item.price}
                                        <div className={s.price__period}>
                                            &nbsp;{item.period}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.longDesc}>
                            {item.longDesc}
                        </div>
                    </div>

                </ListBoxItem>
            )}
        </ListBox>
    )
}