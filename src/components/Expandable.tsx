import React, { ReactElement, useState } from "react";

interface ExpandableProps {
    children: ReactElement[];
}

export function ExpandableSection({ children }: ExpandableProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const buttonText = isExpanded ? "Show Less" : "Show More";

    return (
        <div>
            <div onClick={toggleExpand}>
                {buttonText}{" "}
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

export function ExpandableSectionAbout({ children }: ExpandableProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const buttonText = isExpanded ? "Hide" : "Show";

    return (
        <div>
            <div onClick={toggleExpand}>
                {buttonText}{" "}
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
