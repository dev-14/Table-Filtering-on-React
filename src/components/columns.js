import { format } from 'date-fns';
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
        Filter: ColumnFilter
    },
    {
        Header: 'DOB',
        Footer: 'DOB',
        accessor: 'date_of_birth',
        //Cell: ({ value }) => { return format(new Date(value), 'dd/mm/yyyy')},
        Filter: ColumnFilter
    },
    {
        Header: 'Contact number',
        Footer: 'Contact number',
        accessor: 'phone',
        Filter: ColumnFilter
    },
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            },
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'DOB',
                Footer: 'DOB',
                accessor: 'date_of_birth'
            },
            {
                Header: 'Contact number',
                Footer: 'Contact number',
                accessor: 'phone'
            },
        ]
    },
]