import {
FormControl,
Grid,
InputLabel,
MenuItem,
Select,
TextField,
Button,
} from "@material-ui/core";
import {
MuiPickersUtilsProvider,
KeyboardTimePicker,
KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import ChartViewer from "./ChartViewer";

const region = ['Quốc gia', 'Tỉnh Thành phố', 'Quận huyện','Phường Xã']
function Chart() {
  return (
    <div >
        <Grid container spacing={2} style={{marginTop:'20px'}}>
            <Grid item xs={3} style={{border:'solid 1px black'}}>
                <FormControl style={{}} margin="dense" style={{ width: "300px" }}>
                <InputLabel htmlFor="my-input">Đơn vị</InputLabel>
                    <Select>
                        {region.map((item) => {
                        return (
                            <MenuItem key={item} value={item}>
                            {item}
                            </MenuItem>
                        );
                        })}
                </Select>
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Ngày quá khứ"
                        // value={selectedDate}
                        // onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={8} style={{border:'solid 1px black', marginLeft:'10px'}}>
                <Grid>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Từ ngày"
                            // value={selectedDate}
                            // onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Đến ngày"
                            // value={selectedDate}
                            // onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <Button color="primary" variant="contained" style={{marginTop:"20px"}}>Tính tương quan</Button>
                </Grid>
                <Grid>
                    <FormControlLabel
                        control={<Checkbox  name="checkedA" />}
                        label="Tính Từ đầu ngày"
                    />
                    <FormControlLabel
                        control={<Checkbox name ="checkedA" />}
                        label="Số giở gần nhất"
                    />
                    <FormControlLabel
                        control={<Checkbox  name="checkedA" />}
                        label="Chu kỳ gần nhất"
                    />
                </Grid>

            </Grid>
            <Grid item xs={8}>
                <ChartViewer></ChartViewer>          
            </Grid>
            <Grid item xs={3} style={{border:'solid 1px black', marginLeft:'10px', marginTop:'10px'}}>
                  <TableContainer>
                      <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Giờ</TableCell>
                                    <TableCell align="right">Quá khứ</TableCell>
                                    <TableCell align="right">Thực tế</TableCell>
                                    <TableCell align="right">Dự báo</TableCell>
                                </TableRow>
                            </TableHead>
                      </Table>
                  </TableContainer>
            </Grid>
        </Grid>
    </div>
  );
}

export default Chart;