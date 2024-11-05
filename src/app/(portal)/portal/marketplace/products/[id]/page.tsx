import s from './page.module.scss';
import { softwareProducts } from '@/assets/software';
import Link from 'next/link';
import {Button, Radio, RadioGroup} from 'react-aria-components';
import AnchorButton from '@/app/(portal)/portal/marketplace/products/[id]/_components/anchor-button';
import RadioSelector from '@/app/(portal)/portal/marketplace/products/[id]/_components/radio-selector';
import Columns from '@/app/(portal)/portal/marketplace/products/[id]/_components/columns';

export default async function Page({ params, } : { params : Promise<{id : string }>}) {
    const id = (await params).id
    const item = softwareProducts.find((product) => `${product.id}` == id);
    if (item) {
        return (
            <div className={s.page}>
                <div className={s.sectionList}>
                    <AnchorButton className={s.sectionList__item} elementId="#plans-and-pricing">
                        Plans and pricing
                    </AnchorButton>
                    <AnchorButton className={s.sectionList__item} elementId="#add-ons">
                        Add-ons
                    </AnchorButton>
                </div>
                <div id="#plans-and-pricing">
                    <RadioSelector />
                    <Columns link={`${id}/configure`} />
                </div>
                <div id="#add-ons">
                    Available add-ons
                </div>
            </div>
        )
    }
    return (
        <></>
    )
}