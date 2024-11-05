'use client';
import s from './search-banner.module.scss';
import {Button, FieldError, Form, Input, Label, TextField} from 'react-aria-components';
import {MagnifyingGlassIcon} from '@radix-ui/react-icons';

const header = 'The cloud at your fingertips';

export default function SearchBanner() {
    return (
        <div className={s.section}>
            <div className={s.wrapper}>
                <div className={s.header}>
                    {header}
                </div>
                <Form className={s.searchBar}>
                    <Button type="submit" className={s.submit}><MagnifyingGlassIcon className={s.submit__icon}/></Button>
                    <TextField className={s.textField} type="text" >
                        <Input className={s.input} size={70} placeholder="Search for software" />
                    </TextField>
                </Form>
            </div>
        </div>
    )
}