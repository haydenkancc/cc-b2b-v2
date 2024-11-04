import s from './layout.module.scss';
import TextTitle from '@/components/text-title/text-title';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';

export default function MarketplaceLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={s.layout}>
            <TextTitle title='Software Marketplace' />
            <Breadcrumbs />
            {children}
        </div>
    )
}