import React, { useState,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';




export default function SpanningTable() {
  const [count1, setCount1] = useState(()=>{
    const localCount =  JSON.parse(window.localStorage.getItem('count'));
    return localCount ? localCount : 0;
  });
  const [count, setCount] = useState(() => {
    const localCount =  JSON.parse(window.localStorage.getItem('count'));
    return localCount ? localCount : 0;
  });
  const [amount, setAmount] = useState(0);
  const [amount1, setAmount1] = useState(0);
  const price = [100,200];
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState(false);

  useEffect(() => {
    if(pay)
    {
      if(total<=0)
      alert("Select some item to buy.");
      else{
        setCount(0);
        setCount1(0);
        setPay(false);
      }
    }
  setAmount(count*price[0]);
  setAmount1(count1*price[1]);
  setTotal(amount+amount1);
  },[count,count1,amount,amount1,pay]);

  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem('count')));
    setCount1(JSON.parse(window.localStorage.getItem('count1')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('count', count);
    window.localStorage.setItem('count1', count1);
  }, [count,count1]);


  return (
    <Container fixed className='container'>
      <h2 align="center">RESTURANT MENU</h2>
<hr></hr>
    <TableContainer>
      <Table sx={{ maxWidth: 700 }} aria-label="spanning table" align="center">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Price</TableCell>
            <TableCell align='left' >Qty.</TableCell>
            <TableCell >Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
          <TableCell>Mo:Mo</TableCell>
            <TableCell >{price[0]}</TableCell>
            <TableCell >
                  <Button variant="outlined" onClick={() => {
                    setCount(count + 1);
                  }}>
                    +
                  </Button >
                  <Button variant="outlined">{count}</Button>
                  <Button variant="outlined" onClick={() =>{
                    if(count>0)
                    {
                      setCount(count - 1);
                    }
                    else
                    alert("Quantity cannot be less than 0.");
                   
                  } }>
                    -
                  </Button >
            </TableCell>
            <TableCell >{amount}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell>Biryani</TableCell>
            <TableCell >{price[1]}</TableCell>
            <TableCell>
            <Button variant="outlined" onClick={() => {
                    setCount1(count1 + 1);
                   
                  }}>
                    +
                  </Button >
                  <Button variant="outlined">{count1}</Button>
                  <Button variant="outlined" onClick={() =>{
                    if(count1>0)
                    {
                      setCount1(count1 - 1);
                    }
                    else
                    alert("Quantity cannot be less than 0.");
                  } }>
                    -
                  </Button >
            </TableCell>
            <TableCell >{amount1}</TableCell>
          </TableRow>
         
          <TableRow>
            <TableCell ></TableCell>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell >{total}</TableCell>
          </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
    <Button variant="contained" onClick={() => {
      setPay(true);
  }} className="buy-button">Pay the amount</Button>
   </Container>
  );
}
