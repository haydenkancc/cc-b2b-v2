import './global.scss';
import {LocalizedStringProvider} from 'react-aria-components/i18n';

export default function RootLayout({children, params: {lang}}:
                                       {children: React.ReactNode, params: {lang: string}
}) {
    return (
        <html lang={lang}>
            <body>
                <LocalizedStringProvider locale='en-CA' />
                {children}
            </body>
        </html>
    )
}