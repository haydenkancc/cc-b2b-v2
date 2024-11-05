'use client';
import s from './search-bar.module.scss';
import {Button, Form, Input, TextField} from 'react-aria-components';
import {MagnifyingGlassIcon} from '@radix-ui/react-icons';

interface SearchBarProps {
    placeholder: string;
}

export default function SearchBar({ placeholder } : SearchBarProps) {
    return (
        <Form className={s.searchBar}>
            <Button type="submit" className={s.submit}><MagnifyingGlassIcon /></Button>
            <TextField className={s.textField} type="text" >
                <Input className={s.input} placeholder="Search for software" />
            </TextField>
        </Form>
    )
}