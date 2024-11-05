'use client';
import s from './pagination.module.scss';
import {ArrowLeftIcon, CaretLeftIcon, CaretRightIcon} from '@radix-ui/react-icons';
import {Form, Input, NumberField} from 'react-aria-components';

export default function Pagination() {
    return (
        <div className={s.section}>
            <div className={s.arrow}>
                <CaretLeftIcon />Previous
            </div>
            <div className={s.pageCount}>
                <Form>
                    <NumberField className={s.numberField}>
                        <Input className={s.input} size={2}/>
                    </NumberField>
                </Form>
                of 16
            </div>
            <div className={s.arrow}>
                Next<CaretRightIcon />
            </div>
        </div>
    )
}