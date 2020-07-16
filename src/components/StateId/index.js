import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Reactdom from 'react-dom'
import Axios from '../../axios'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { TextareaAutosize } from '@material-ui/core'
import arrowSVG from './arrow_upward.svg'
import Button from '@material-ui/core/Button';

const StatesInfo = ({ match }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        Axios.get("/states/daily").then(res => {
            setItems(res.data.filter(state => state.state == match.params.stateid));
        })
    }, []);
    const useStyles = makeStyles({
        table: {
            minWidth: 500,
            margin: 'auto'
        },
    });
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);


    const classes = useStyles();
    const UpArrow = () => (
        <img src={arrowSVG} style={{ color: "white" }} alt="increase" />
    )

    return (
        <TableContainer component={Paper}>
            <Button onClick={() => window.history.go(-1)} variant="outlined">
                Go Back
            </Button>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell align="right">Positive</StyledTableCell>
                        <StyledTableCell align="right">Positive <UpArrow /></StyledTableCell>
                        <StyledTableCell align="right">Negative</StyledTableCell>
                        <StyledTableCell align="right">Negative <UpArrow /></StyledTableCell>
                        <StyledTableCell align="right">Recovered</StyledTableCell>
                        <StyledTableCell align="right">Deaths</StyledTableCell>
                        <StyledTableCell align="right">Death <UpArrow /></StyledTableCell>
                        <StyledTableCell align="right">Hospitalized</StyledTableCell>
                        <StyledTableCell align="right">Hospitalized <UpArrow /></StyledTableCell>
                        <StyledTableCell align="right">Total Tests Done</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item => (
                        <StyledTableRow key={item.dateChecked}>
                            <StyledTableCell component="th" scope="row">
                                {new Date(item.dateChecked).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </StyledTableCell>
                            <StyledTableCell align="right">{item.positive}</StyledTableCell>
                            <StyledTableCell align="right">{item.positiveIncrease}</StyledTableCell>
                            <StyledTableCell align="right">{item.negative}</StyledTableCell>
                            <StyledTableCell align="right">{item.negativeIncrease}</StyledTableCell>
                            <StyledTableCell align="right">{item.recovered}</StyledTableCell>
                            <StyledTableCell align="right">{item.deathConfirmed}</StyledTableCell>
                            <StyledTableCell align="right">{item.deathIncrease}</StyledTableCell>
                            <StyledTableCell align="right">{item.hospitalizedCurrently}</StyledTableCell>
                            <StyledTableCell align="right">{item.hospitalizedIncrease}</StyledTableCell>
                            <StyledTableCell align="right">{item.total}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default StatesInfo