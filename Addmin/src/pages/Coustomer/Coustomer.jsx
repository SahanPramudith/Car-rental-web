import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Coustomer() {


    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/user/userget")

            .then(function (response) {
                console.log(response.data);
                setData(response.data);

            });
    }, []);



    return(
        <div>
            <div
                style={{display: 'flex', justifyContent: 'center', backgroundColor: '#565050', color: '#ffefef'}}>Coustomer Request
            </div><br/><br/>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650,}} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{backgroundColor: "#554b4b"}}>
                            <TableCell sx={{color: '#fefafa'}} align="right">name</TableCell>
                            <TableCell sx={{color: '#fefafa'}} align="right">email</TableCell>
                            <TableCell sx={{color: '#fefafa'}} align="right">location</TableCell>
                            <TableCell sx={{color: '#fefafa'}} align="right">start_date</TableCell>
                            <TableCell sx={{color: '#fefafa'}} align="right">end_date</TableCell>
                            <TableCell sx={{color: '#fefafa'}} align="right">Vehical</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{backgroundColor: "#b8a2a2"}}>
                        {data.map((val, index) => (

                            <TableRow
                                key={val.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >

                                <TableCell align="right">{val.name}</TableCell>
                                <TableCell align="right">{val.email}</TableCell>
                                <TableCell align="right">{val.location}</TableCell>
                                <TableCell align="right">{val.start_date}</TableCell>
                                <TableCell align="right">{val.end_date}</TableCell>
                                <TableCell align="right">{val.vehicle}</TableCell>
                            </TableRow>

                        ))}


                    </TableBody>
                </Table>

            </TableContainer>
        </div>
    )
}