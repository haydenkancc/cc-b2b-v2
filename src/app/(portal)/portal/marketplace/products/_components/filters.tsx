import s from './filters.module.scss';
import {CaretDownIcon} from '@radix-ui/react-icons';

export default function Filters() {
    return (
        <div className={s.filters}>
            <div className={s.filters__section}>
                <div className={s.filters__group}>
                    <div className={s.filters__groupTitle}>
                        Filter:
                    </div>
                    <div className={s.filters__groupItem}>
                        Vendor <CaretDownIcon/>
                    </div>
                    <div className={s.filters__groupItem}>
                        Segment <CaretDownIcon/>
                    </div>
                    <div className={s.filters__groupItem}>
                        Product Type <CaretDownIcon/>
                    </div>
                    <div className={s.filters__groupItem}>
                        Billing Type <CaretDownIcon/>
                    </div>
                    <div className={s.filters__groupItem}>
                        Terms <CaretDownIcon/>
                    </div>
                </div>
            </div>
            <div className={s.filters__section}>
                <div className={s.filters__group}>
                    <div className={s.filters__groupTitle}>
                        Sort:
                    </div>
                    <div className={s.filters__groupItem}>
                        Price Descending <CaretDownIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}