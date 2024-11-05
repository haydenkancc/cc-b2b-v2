import s from './page.module.scss';
import {Button, Form, Input, TextField} from 'react-aria-components';
import {CaretDownIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons';
import SearchBar from '@/components/search-bar/search-bar';
import Rows from '@/app/(portal)/portal/marketplace/products/_components/rows';
import Filters from '@/app/(portal)/portal/marketplace/products/_components/filters';
import Pagination from '@/app/(portal)/portal/marketplace/products/_components/pagination';

export default function Page(){
    return (
        <div className={s.page}>
            <div className={s.titleSection}>
                <div className={s.headings}>
                    <div className={s.headings__header}>
                        All Software
                    </div>
                    <div className={s.headings__search}>
                        <SearchBar placeholder="Search for software" />
                    </div>
                </div>
                <div className={s.subheadings}>
                    <span className={s.subheadings__subheader}>
                        Showing 1-24 of 385 results
                    </span>
                </div>
                <Filters />
            </div>
            <Rows />
            <Pagination />
        </div>
    )
}