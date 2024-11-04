'use client';
import s from './search-banner.scss';
import {Button, FieldError, Form, Input, Label, TextField} from 'react-aria-components';

const header = 'The cloud at your fingertips';

export default function SearchBanner() {
    return (
        <div className={s.page}>
            <div className={s.header}>
                {header}
            </div>
            <Form className={s.searchBar}>
                <Button type="submit" className={s.submit}>Submit</Button>
                <TextField className={s.textField} type="text">
                    <Input className={s.input} />
                </TextField>
            </Form>
        </div>
    )
}