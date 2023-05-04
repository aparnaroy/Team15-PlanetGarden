import React, { ReactElement, useState } from "react";

interface ExpandableProps {
    children: ReactElement[];
}

export function ExpandableSection({ children }: ExpandableProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <div onClick={toggleExpand}>
                Show More{" "}
                <span
                    style={{
                        display: "inline-block",
                        transform: isExpanded
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        fontSize: "16px",
                        marginRight: "4px"
                    }}
                >
                    ▼
                </span>
            </div>
            {isExpanded && <div>{children}</div>}
        </div>
    );
}
