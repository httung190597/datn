import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Button,
  } from "@material-ui/core";
  import Paper from "@material-ui/core/Paper";
  import Table from "@material-ui/core/Table";
  import TableBody from "@material-ui/core/TableBody";
  import TableCell from "@material-ui/core/TableCell";
  import TableContainer from "@material-ui/core/TableContainer";
  import TableHead from "@material-ui/core/TableHead";
  import TableRow from "@material-ui/core/TableRow";
  import React from "react";

  const meal = ["breakfast", "dinner", "lunch"];
  const rows = [
    createData(
      "Frozen yoghurt",
      159,
      6.0,
      24,
      4.0,
      1123,
      12312,
      13213,
      13,
      123,
      12,
      312,
      678,
      1376
    ),
    createData(
      "Frozen yoghurt",
      159,
      6.0,
      24,
      4.0,
      1123,
      12312,
      13213,
      13,
      123,
      12,
      312,
      678,
      1376
    ),
    createData(
      "Frozen yoghurt",
      159,
      6.0,
      24,
      4.0,
      1123,
      12312,
      13213,
      13,
      123,
      12,
      312,
      678,
      1376
    ),
  ];
  
  const headerStyle = {
    float: "left",
    color: "blue",
    fontWeight: "700",
    fontSize: "20px",
    marginLeft: "20px",
  };
  
  function createData(
    name,
    ck1,
    ck2,
    ck3,
    ck4,
    ck5,
    ck6,
    ck7,
    ck8,
    ck9,
    ck10,
    ck11,
    ck12
  ) {
    return {
      name,
      ck1,
      ck2,
      ck3,
      ck4,
      ck5,
      ck6,
      ck7,
      ck8,
      ck9,
      ck10,
      ck11,
      ck12,
    };
  }
  function ShowData(props) {
    return (
      <div>
        <Grid item md={12} sm={12} xs={12}>
          <label style={headerStyle} htmlFor="">
            Bên mua điện
          </label>
        </Grid>
        <div >
          <Grid container spacing={6} className="App">
            <Grid item md={12} sm={12} xs={12}>
              <label style={headerStyle} htmlFor="">
                Phụ Tải
              </label>
            </Grid>
            <Grid item md={5} sm={6} xs={12} className="ml-16">
              <FormControl style={{}} margin="dense" style={{ width: "300px" }}>
                <InputLabel htmlFor="my-input">Đơn vị</InputLabel>
                <Select>
                  {meal.map((item) => {
                    return (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
  
            <Grid item md={5} sm={6} xs={12} className="ml-16">
              <TextField
                style={{ width: "300px" }}
                id="date"
                label="Ngày"
                type="date"
                //   defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item md={2} sm={2} xs={12} className="ml-16">
              <Button variant="contained" color="primary">
                Download All
              </Button>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={6} className="#">
            <Grid item md={12} sm={12} xs={12}>
              <label style={headerStyle} htmlFor="">
                Phụ tải tổng ngày
              </label>
            </Grid>
            <Grid item md={10} sm={10} xs={12} className="ml-16">
              <TableContainer component={Paper} style={{ marginLeft: "40px" }}>
                <Table
                  //   className={classes.table}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Xác nhận</TableCell>
                      <TableCell align="right">Tổng&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 1&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 2&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 3&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 4&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 5&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 6&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 7&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 8&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 9&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 10&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 11&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 12&nbsp;</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">1325465&nbsp;</TableCell>
                        <TableCell align="right">{row.ck1}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck2}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck3}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck4}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck5}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck6}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck7}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck8}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck9}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck10}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck11}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck12}&nbsp;</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item md={2} sm={2} xs={12} className="ml-16">
              <Button variant="contained" color="primary">
                Xuất Excel
              </Button>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={4} className="#">
            <Grid item md={12} sm={12} xs={12}>
              <label style={headerStyle} htmlFor="">
                Phụ tải nguồn nhỏ
              </label>
            </Grid>
            <Grid item md={10} sm={10} xs={12} className="ml-16">
              <TableContainer component={Paper} style={{ marginLeft: "40px" }}>
                <Table
                  //   className={classes.table}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Xác nhận</TableCell>
                      <TableCell align="right">Tổng&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 1&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 2&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 3&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 4&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 5&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 6&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 7&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 8&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 9&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 10&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 11&nbsp;</TableCell>
                      <TableCell align="right">Chu kỳ 12&nbsp;</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">1325465&nbsp;</TableCell>
                        <TableCell align="right">{row.ck1}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck2}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck3}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck4}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck5}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck6}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck7}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck8}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck9}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck10}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck11}&nbsp;</TableCell>
                        <TableCell align="right">{row.ck12}&nbsp;</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item md={2} sm={2} xs={12} className="ml-16">
              <Button variant="contained" color="primary">
                Xuất Excel
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
  
  export default ShowData;