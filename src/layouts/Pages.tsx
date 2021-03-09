import React, {ReactNode} from "react";
import Link from "next/link";

interface Pages {
    children: ReactNode,
}

const Pages: React.FC<Pages> = ({children}) => {

    return (
        <>
            <main className="main">
                {children}
            </main>
        </>
    )
}

export default Pages;
