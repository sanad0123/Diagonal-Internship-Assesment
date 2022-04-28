import React, { useState }  from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Item() {
    const [count, setCount] = useState(0);

  return (
    <div>

            
              <TableCell>Food Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">
                    <button onClick={() => setCount(count + 1)}>
                    +
                    </button>
                    <button>{count}</button>
                    <button onClick={() => setCount(count - 1)}>
                    -
                    </button>
              </TableCell>
              <TableCell align="right">amount</TableCell>
            
           

  
  </div>
  )
}
