import type { FC, ReactNode } from "react";
import LayoutHeader from "../../widgets/LayoutHeader/LayoutHeader";
import LayoutFooter from "../../widgets/LayoutFooter/LayoutFooter";
interface MainLayoutProps {
    children: ReactNode
}
 
const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return ( 
        <main>
            <LayoutHeader/>
            {children}
            <LayoutFooter/>
        </main>
     );
}
 
export default MainLayout;