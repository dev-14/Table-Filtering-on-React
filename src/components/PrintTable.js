import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import { FilteringTable } from './FilteringTable';
import { RowSelection } from './RowSelection';

export const PrintTable = () => {
  const componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <FilteringTable ref={componentRef} />
    </div>
  );
};