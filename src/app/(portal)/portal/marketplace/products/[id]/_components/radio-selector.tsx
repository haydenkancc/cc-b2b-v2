'use client';
import s from './radio-selector.module.scss';
import {RadioGroup, Radio} from 'react-aria-components';

export default function RadioSelector() {
    return (
        <RadioGroup className={s.group} defaultValue="1" aria-label="">
            <Radio className={s.radio} value="1">
                Paid annually
            </Radio>
            <Radio className={s.radio} value="2">
                Paid monthly
            </Radio>
        </RadioGroup>
    )
}