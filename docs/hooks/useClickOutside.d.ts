import { RefObject } from 'react';

declare const useClickOutside: (onClick: () => void, scopeRef: RefObject<HTMLElement | null>) => void;
export { useClickOutside };
