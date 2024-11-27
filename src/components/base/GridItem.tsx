import { ReactNode } from 'react';

interface GridItemProps {
  cols?: number;
  children: ReactNode;
}

const GridItem = ({ cols = 1, children }: GridItemProps) => {
  return (
    <div className={`col-span-1 md:col-span-${cols}`}>
      {children}
    </div>
  );
};

export default GridItem;