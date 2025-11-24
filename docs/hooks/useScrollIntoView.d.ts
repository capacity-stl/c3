import { RefObject } from 'react';

declare const useScrollIntoView: (scopeRef: RefObject<HTMLElement | null>, className: string) => () => void;
export { useScrollIntoView };
