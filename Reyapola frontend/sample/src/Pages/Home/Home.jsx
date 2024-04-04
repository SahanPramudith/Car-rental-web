import {Box, Button, CssBaseline, Grid, Paper, TextField, Typography} from "@mui/material";
import bgcar from '../../assert/bgcar.jpg'
import Grid2 from "@mui/material/Unstable_Grid2";
import './Home.css'
import React, {useEffect, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea} from '@mui/material';
import axios from "axios";
import Foot from "../foot/Foot.jsx";


export default function Home() {


    const [data, setData] = useState([])
    const [location, setLocation] = useState('')
    const [startdate, setStartdate] = useState('')
    const [enddate, setEnddate] = useState('')
    const [vehical, setVehical] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')



    function ubmitreq() {
        axios.post('http://localhost:3000/user/usersave', {
            name: name,
            email: email,
            location: location,
            start_date: startdate,
            end_date:enddate,
            vehicle:vehical
        })
            .then(function (response) {
                console.log(response);
                window.location.reload()
                
            })
            .catch(function (error) {
                console.log(error);
            });

        console.log(location,startdate,enddate,vehical,name,email)
        clear()
    }

    function clear() {
        setLocation('');
         useState('');
         useState('');
         useState('');
         useState('');
         useState('');
    }



    useEffect(() => {
        axios.get("http://localhost:3000/post/getpost")

            .then(function (response) {
                console.log(response.data);
                setData(response.data);
            });
    }, []);


    return (<div>
        <Box component={Paper} elevation={6} square sx={{
            width: '100vw',
            height: '90vh',
            background: `url(${bgcar})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',

        }}>
            <Typography mt={2}
                        sx={{
                            color: '#f0eaea', display: 'flex', position: 'relative', left: '100px', top: '200px'
                        }}>
                <div style={{fontSize:'20px',}}>
                    <div>
                       <h4>Why Choose Us</h4>
                    </div>
                    <div style={{fontWeight:'revert-layer'}}>
                        <h2>Best valued deals you will ever find</h2>
                    </div>
                    <div>
                        <h5>    Thrown shy denote ten ladies though ask saw. <br/>Or by to he going think order event music.<br/> Incommode so intention defective at convinced.<br/> Led income months itself and houses you.
                        </h5>
                    </div>

                </div>
            </Typography>
        </Box>
        <div className='box'>
            <div>
                <h5>Location</h5>
                <TextField
                    type={"text"}
                    placeholder={'Location'}
                    sx={{margin: '10px'}}
                    onChange={(val)=>setLocation(val.target.value)}
                />
            </div>
            <div>
                <h5>start Date</h5>
                <TextField type={"date"} sx={{margin: '10px'}}
                onChange={(val)=>setStartdate(val.target.value)}
                />
            </div>
            <div>
                <h5>End Date</h5>
                <TextField type={"date"} sx={{margin: '10px'}}
                onChange={(val)=>setEnddate(val.target.value)}
                />
            </div>
            <div>
                <h5>Select vehical</h5>
                <TextField type={"text"} placeholder={'car'}  sx={{margin: '10px'}}
                onChange={(val)=>setVehical(val.target.value)}
                />
            </div>
            <div>
                <h5>Name</h5>
                <TextField type={"text"} placeholder={'Enter name'}  sx={{margin: '10px'}}
                onChange={(val)=>setName(val.target.value)}
                />
            </div>
            <div>
                <h5>Email</h5>
                <TextField type={"text"} placeholder={'Enter Email'}  sx={{margin: '10px'}}
                           onChange={(val)=>setEmail(val.target.value)}
                />
            </div>
            <div>
                <Button variant="contained" disableElevation sx={{margin: '30px'}}
                onClick={()=>ubmitreq()}
                >
                    Disable elevation
                </Button>
            </div>
            <hr/>
        </div>

        <Grid sx={{
            display: 'flex', justifyContent: 'space around',
            flexWrap: 'wrap'
        }}


        >
            {data.map((val, index) => (
                <Card sx={{maxWidth: 300, maxHeight: 300, padding: 2, margin: 2}}>
                    <CardActionArea>
                        <img src={`http://localhost:3000/` + val.image}
                             style={{width: '250px', height: "170px"}}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {val.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Grid>
        <Foot/>
    </div>)
}