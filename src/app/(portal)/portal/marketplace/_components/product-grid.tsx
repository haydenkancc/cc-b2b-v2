'use client'
import s from './product-grid.module.scss'
import {ListBox, ListBoxItem} from 'react-aria-components';

import {softwareProducts} from '@/assets/software';


export default function ProductGrid() {
    return (
        <ListBox className={s.section} items={softwareProducts}>
            {item => (
                <ListBoxItem className={s.card}>
                    <div className={s.headings}>
                        <div className={s.headings__image}>
                            <img src={item.longSrc} alt="vendor logo"/>
                        </div>
                        <div className={s.headings__tag}>
                            {item.tag}
                        </div>
                    </div>
                    <div className={s.title}>
                        {item.title}
                    </div>
                    <div className={s.desc}>
                        <div className={s.shortDesc}>
                            {item.shortDesc}
                        </div>
                        <div className={s.longDesc}>
                            {item.longDesc}
                        </div>
                    </div>
                    <div className={s.price}>
                        {item.price}
                        <div className={s.price__period}>
                            &nbsp;{item.period}
                        </div>
                    </div>
                </ListBoxItem>
            )}
        </ListBox>
    )
}