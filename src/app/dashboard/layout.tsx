import React, { ReactNode } from 'react';
interface DashboardLayoutProps {
  children: ReactNode;
}
const DashboardLayout = ({children}:DashboardLayoutProps) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default DashboardLayout;