import { useMemo } from "react";
import { useTable, useSortBy, usePagination } from 'react-table';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const DataTable = ({column, griddata}) => {
    const classes = useStyles();

    const columns = useMemo(() => column,[]);
    const data = useMemo(() => griddata,[]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow
      } = useTable({
        columns,
        data
      }, useSortBy, usePagination)
    
      return (
        <TableContainer component={Paper}>
          <Table className={classes.table} {...getTableProps()}>
            <TableHead>
              {headerGroups.map(headerGroup => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                     <span>
                        {column.id === 'Action' ? '' : column.isSorted ? column.isSortedDesc ? ' ▼': ' ▲' : ' ▾'}
                      </span>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row)
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          </TableContainer>
      )
}
 
export default DataTable;