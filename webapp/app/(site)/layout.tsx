import React from 'react'
import HeaderApp from '../(panle)/components/HeaderApp/HeaderApp';
import Navigation from './components/menu/Menu';

interface LayoutProps {
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (

        <div className="flex w-full">

            <div className="flex-1 flex flex-col">
                <Navigation />
                <div className="p-4">{children}</div>
            </div>
        </div>


    );
};

export default Layout;