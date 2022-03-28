import { useEffect } from 'react';
import Header from './Header'
const Layout = ({ title, className, children }) => {
    useEffect(() => {
        document.title = title ? `Portfolio - ${title}` : 'Portfolio';
    })
    return (
        <div className={className}>
            <Header />
            {children}
        </div>
    )
}

export default Layout;