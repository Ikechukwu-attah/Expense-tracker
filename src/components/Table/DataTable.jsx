import React, { useState } from "react";
import { tableData } from "../../Dummydata";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material/styles/createTypography";
import { TablePagination } from "@mui/material";
import { TableFooter } from "@mui/material";

import { StyledCircle } from "./style";

const DataTable = () => {
  const useStyles = makeStyles((theme) => ({
    tableContainer: {
      padding: "1px  ",
      maxWidth: 390,
    },
    tableHeaderCell: {
      fontWeight: "semi-bold",
      fontSize: "16px",
      fontWeight: 600,
      opacity: 0.6,
    },

    tableText: {
      fontWeight: "400",
      fontSize: "10px",
      color: " #4DE897",
    },
  }));

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerpage] = useState(5);
  const handelChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerpage(+event.target.value);
    setPage(0);
  };

  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table sx={{ minWidth: 10 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow
                key={row.amount}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Grid container>
                    <Grid item lg={3}>
                      <StyledCircle />
                    </Grid>
                    <Grid item lg={2}>
                      {row.amount}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell className={classes.tableText}>{row.date}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TablePagination
            rowsPerPageOption={[5, 10, 15]}
            component="div"
            count={tableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handelChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
