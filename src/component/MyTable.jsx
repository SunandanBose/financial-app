import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

const MyTable = ({ data }) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ position: 'sticky', top: 0, background: '#fff' }}>Year</TableCell>
            <TableCell style={{ position: 'sticky', top: 0, background: '#fff' }}>Monthly Principal</TableCell>
            <TableCell style={{ position: 'sticky', top: 0, background: '#fff' }}>Yearly Principal</TableCell>
            <TableCell style={{ position: 'sticky', top: 0, background: '#fff' }}>Yearly Final Amount</TableCell>
            <TableCell style={{ position: 'sticky', top: 0, background: '#fff' }}>Yearly Interest Gained</TableCell>
            <TableCell style={{ position: 'sticky', top: 0, background: '#fff' }}>Tax</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((yearlyData, index) => (
            <TableRow key={index}>
              <TableCell>{yearlyData.Year}</TableCell>
              <TableCell>{yearlyData.Monthly_Principal.toFixed(2)}</TableCell>
              <TableCell>{yearlyData.Yearly_Principal.toFixed(2)}</TableCell>
              <TableCell>{yearlyData.Yearly_Final_Amount.toFixed(2)}</TableCell>
              <TableCell>{yearlyData.Yearly_Interest_Gained.toFixed(2)}</TableCell>
              <TableCell>{yearlyData.Tax.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default MyTable;
