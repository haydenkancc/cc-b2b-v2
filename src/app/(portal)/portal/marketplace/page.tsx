import s from './page.module.scss';
import SearchBanner from '@/components/search-banner/search-banner';

export default function Page() {
    return (
        <div className={s.page}>
            <SearchBanner />
        </div>
    )
}