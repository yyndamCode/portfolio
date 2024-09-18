import React from 'react';
 type accordionProps ={
    children?: React.ReactNode;
}
const AccordionNavbar:React.FC<accordionProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AccordionNavbar;