// react-scroll.d.ts

declare module 'react-scroll' {
    import * as React from 'react';
  
    export interface LinkProps {
      activeClass?: string;
      to: string;
      spy?: boolean;
      smooth?: boolean;
      offset?: number;
      duration?: number;
      delay?: number;
      isDynamic?: boolean;
      onSetActive?: () => void;
      onSetInactive?: () => void;
      hashSpy?: boolean;
      isDynamic?: boolean;
      containerId?: string;
      children: React.ReactNode;
    }
  
    export const Link: React.FC<LinkProps>;
  }
  