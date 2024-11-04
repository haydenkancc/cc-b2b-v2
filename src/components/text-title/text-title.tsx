import s from './text-title.module.scss';

interface TextTitleProps {
    title: string;
}

export default function TextTitle({ title } : TextTitleProps) {
    return (
        <div className={s.section}>
            {title}
        </div>
    )
}