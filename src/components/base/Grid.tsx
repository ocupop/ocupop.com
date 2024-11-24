import { ReactNode } from 'react';

interface GridProps {
  sm_columns?: number;
  md_columns?: number;
  lg_columns?: number;
  xl_columns?: number;
  inner_components: ReactNode[];
}

interface GridItemProps extends ReactNode {
  props: {
    cols?: number;
  }
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
    gap-6
    grid-cols-${sm_columns}
    md:grid-cols-${md_columns}
    lg:grid-cols-${lg_columns}
    xl:grid-cols-${xl_columns}
  `;

  return (
    <div className={gridClasses}>
      {inner_components.map((component: GridItemProps, index) => {
        const colSpan = component.props?.cols || 1;
        return (
          <div key={index} className={`col-span-1 md:col-span-${colSpan}`}>
            {component}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
