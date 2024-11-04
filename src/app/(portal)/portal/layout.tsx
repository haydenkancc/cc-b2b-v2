import s from './layout.module.scss';
import GlobalNavigation from '@/components/global-navigation/global-navigation';

export default function PortalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={s.page}>
            <GlobalNavigation/>
            {children}
        </div>
    )
}