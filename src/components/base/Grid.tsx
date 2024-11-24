import { ReactNode } from 'react';

interface GridProps {
  sm_columns?: number;
  md_columns?: number;
  lg_columns?: number;
  xl_columns?: number;
  inner_components: ReactNode[];
}

const Grid = ({
  sm_columns = 1,
  md_columns = 2,
  lg_columns = 3,
  xl_columns = 4,
  inner_components
}: GridProps) => {
  const gridClasses = `
    grid
    gap-8
    grid-cols-${sm_columns}
    md:grid-cols-${md_columns}
    lg:grid-cols-${lg_columns}
    xl:grid-cols-${xl_columns}
  `;

  return (
    <div className={gridClasses}>
      {inner_components.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </div>
  );
};

export default Grid;
