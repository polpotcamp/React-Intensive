import type { FC, ReactNode } from "react";
interface MainLayoutProps {
    children: ReactNode
}
 
const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return ( 
        <main>
            {children}
        </main>
     );
}
 
export default MainLayout;