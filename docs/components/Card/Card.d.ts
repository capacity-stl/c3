import { CardProps } from './Card.props';

declare const Card: {
    ({ className, children, p, borderRadius, hoverEffect, bgColor, onClick, testId, ...cardProps }: CardProps): import("react/jsx-runtime").JSX.Element;
    Header: ({ className, children, title, description, ...cardProps }: import('./Card.props').CardHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Body: ({ className, children, ...cardProps }: import('./Card.props').CardBodyProps) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ className, children, justifyContent, ...cardProps }: import('./Card.props').CardFooterProps) => import("react/jsx-runtime").JSX.Element;
};
export { Card };
