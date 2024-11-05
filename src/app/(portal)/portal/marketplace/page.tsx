import s from './page.module.scss';
import SearchBanner from '@/components/search-banner/search-banner';
import {ArrowRightIcon} from '@radix-ui/react-icons';
import ProductGrid from '@/app/(portal)/portal/marketplace/_components/product-grid';
import Link from 'next/link';

export default function Page() {
    return (
        <div className={s.page}>
            <SearchBanner />
            <div className={s.section}>
                <div className={s.section__headings}>
                    <div className={s.section__header}>
                        Recommended Software
                    </div>
                    <div className={s.section__subheadings}>
                        <div className={s.section__subheader}>
                            Tools to speed up and automate your processes. Easy to use, whether you're a beginner or an expert.
                        </div>
                        <Link className={s.section__link} href={{pathname: 'marketplace/products'}}>
                            Browse all software <ArrowRightIcon />
                        </Link>
                    </div>
                </div>
                <ProductGrid />
            </div>
        </div>
    )
}