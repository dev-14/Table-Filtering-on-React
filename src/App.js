import './App.css';
import { BasicTable } from './components/BasicTable';
import { FilteringTable } from './components/FilteringTable';
import { PaginationTable } from './components/Pagination';
import { PrintTable } from './components/PrintTable';
import { RowSelection } from './components/RowSelection';
import { SortingTable } from './components/SortingTable';

function App() {
    return (
      <div>
        <PrintTable />
      </div>
    );
}

export default App;
