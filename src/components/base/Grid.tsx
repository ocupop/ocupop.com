import { ReactNode } from 'react';

interface GridProps {
  sm_columns?: number;
  md_columns?: number;
  lg_columns?: number;
  xl_columns?: number;
  gap?: number;
  classNames?: string;
  inner_components: ReactNode[];
}

const Grid = ({
  sm_columns = 1,
  md_columns = 2,
  lg_columns = 3,
  xl_columns = 4,
  gap = 6,
  inner_components,
  classNames
}: GridProps) => {
  const gridClasses = `
    grid
    gap-${gap}
    grid-cols-${sm_columns}
    md:grid-cols-${md_columns}
    lg:grid-cols-${lg_columns}
    xl:grid-cols-${xl_columns}
    ${classNames}
  `;

  return (
    <div className={gridClasses}>
      {inner_components}
    </div>
  );
};

export default Grid;
