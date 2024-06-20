import {ReactNode} from "react";

interface Props {
    readonly children: ReactNode;
    readonly className?: string;
}

function ContentLayout({ children, className }: Props) {
    return (
        <div className={`justify-center flex flex-col ${className ?? ""}`} style={{ height: "calc(100vh - 120px)" }}>
            {children}
        </div>
    );
}

export default ContentLayout;