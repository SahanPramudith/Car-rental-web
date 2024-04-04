
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Avatar, Box, Button, CardActionArea, Checkbox, FormControlLabel, Grid, Paper, TextField} from '@mui/material';
import Grid2 from "@mui/material/Unstable_Grid2";
import tpno from "../../assert/tpno.png";
import email from "../../assert/email.jpg";
import map from "../../assert/map.png";
import {useEffect, useState} from "react";
import axios from "axios";
import Foot from "../foot/Foot.jsx";


export default function Contact() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [addresss, setAddresss] = useState('')



    useEffect(() => {

    }, []);

    function submit() {
        axios.post('http://localhost:3000/couatomer/postsave', {
            name: name,
            email: email,
            contact_number:contact,
            address:addresss
        })
            .then(function (response) {
                console.log(response);
                window.location.reload()
                clear();


            })
            .catch(function (error) {
                console.log(error);
                clear();
            });


    }
    function clear() {
        setName();
        setAddresss('');
        setContact('');
        setEmail('')
    }

    return(
        <div>
            <Grid2 sx={{display :'flex', justifyContent:'space-around'}}>
                <Card sx={{maxWidth: 350, maxHeight: 350, padding: 2, margin: 2}}>
                    <CardActionArea>

                           <img src={tpno} alt={'sa'} style={{width: '120px', height: "120px", justifyContent:'center'}}/>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                0741600386
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                contact number
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{maxWidth: 350, maxHeight: 350, padding: 2, margin: 2}}>
                    <CardActionArea>
                        <img src={map} alt={'sa'} style={{width: '120px', height: "120px", justifyContent: 'center'}}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                No/123, Darmapala Mawata , Nupe , Matara .
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Address
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{maxWidth: 350, maxHeight: 350, padding: 2, margin: 2}}>
                    <CardActionArea>
                        <img src={email} alt={'sa'} style={{width: '120px', height: "120px", justifyContent: 'center'}}/>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                info@riyapola@gmail.com
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                email address
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid2>

            <div>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >


                        <Box component='form'
                             sx={{maxWidth: 345, padding: 2, justifyContent: 'center', textAlign: 'center', mt: 1}}>
                            <TextField type={"text"} placeholder={'Enter Name'}  sx={{margin: '10px'}}
                                       onChange={(val)=>setName(val.target.value)}
                            />
                            <TextField type={"text"} placeholder={'Enter Email'}  sx={{margin: '10px'}}
                                       onChange={(val)=>setEmail(val.target.value)}
                            />
                            <TextField type={"number"} placeholder={'Enter Contact noumber '}  sx={{margin: '10px'}}
                                       onChange={(val)=>setContact(val.target.value)}
                            />
                            <TextField type={"text"} placeholder={'Enter Address'}  sx={{margin: '10px'}}
                                       onChange={(val)=>setAddresss(val.target.value)}
                            />
                            <Button variant="contained" disableElevation sx={{margin: '30px'}}
                                    onClick={()=>submit()}
                            >
                                Disable elevation
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </div>
            <Foot/>
        </div>
    )
}