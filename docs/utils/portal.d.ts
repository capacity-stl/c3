/// <reference types="react" />
export declare const usePortal: () => HTMLElement | null;
export declare const Portal: ({ children }: {
    children: React.ReactNode;
}) => import('react').ReactPortal | null;
