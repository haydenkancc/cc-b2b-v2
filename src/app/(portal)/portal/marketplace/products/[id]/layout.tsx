import {softwareProducts} from '@/assets/software';
import s from './layout.module.scss';
import AnchorButton from '@/app/(portal)/portal/marketplace/products/[id]/_components/anchor-button';
import RadioSelector from '@/app/(portal)/portal/marketplace/products/[id]/_components/radio-selector';
import Columns from '@/app/(portal)/portal/marketplace/products/[id]/_components/columns';


export default async function Layout({ params, children } : { params : Promise<{id : string }>, children: React.ReactNode }) {
    const id = (await params).id
    const item = softwareProducts.find((product) => `${product.id}` == id);
    if (item) {
        return (
            <div className={s.page}>
                <div className={s.titleSection}>
                    <div className={s.titleSection__title}>
                        {item.title}
                    </div>
                    <div className={s.titleSection__subtitle}>
                        Sold by {item.vendor}
                    </div>
                </div>
                <div className={s.infoSection}>
                    <div className={s.logo}>
                        <img src={item.longSrc} alt="service plan logo"/>
                    </div>
                    <div className={s.info}>
                        <div className={s.price}>
                            {item.price}
                            <div className={s.price__period}>
                                &nbsp;{item.period}
                            </div>
                        </div>
                        <div className={s.longDesc}>
                            {item.longDesc}
                            <br/><br/>
                            Have a question about this plan? Contact your account manager for assistance.
                        </div>
                        <div className={s.button__wrapper}>
                            <AnchorButton className={s.button} elementId="#plans-and-pricing">
                                See plans and pricing
                            </AnchorButton>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        )
    }
    return (
        <></>
    )
}