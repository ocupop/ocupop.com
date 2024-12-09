import { ReactNode } from 'react';

interface GridItemProps {
  cols?: number;
  children: ReactNode;
  className?: string
}

const GridItem = ({ cols = 1, children, className }: GridItemProps) => {
  return (
    <div className={`col-span-1 md:col-span-${cols} ${className}`}>
      {children}
    </div>
  );
};

export default GridItem;