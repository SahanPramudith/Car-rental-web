import { Button, Grid, Paper, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { useState } from "react";
import axios from "axios";
import { red } from "@mui/material/colors";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import {useParams} from "react-router-dom";




export default function Update() {

    const [dicrip, setDicrip] = useState('');
    const [file, setFile] = useState()


    let {id}=useParams()

    function update() {
        const formdata = new FormData();
        formdata.append('description', dicrip);
        formdata.append('image', file);
        axios.put('http://localhost:3000/post/postupdate/' +id,formdata)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        clear();

    }
    function clear() {
        setDicrip('');
        setFile('');
    }

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (
        <div>
            <div style={{display:'flex',justifyContent:'center', backgroundColor:'#565050',color:'#ffefef'}}>Update</div>
            <br/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={12}
                  sx={{ width: 345, display: 'flex', justifyContent: "center", borderRadius: 5 }}
            >
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
                         sx={{
                             maxWidth: 350,
                             justifyContent: 'center'
                         }}

                    >
                        {/* <input type="file"
                            onChange={(val) => setFile(val.target.files[0])}

                        /> */}
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload file
                            <VisuallyHiddenInput type="file"
                                                 onChange={(val) => setFile(val.target.files[0])}
                            />
                        </Button>

                        <TextField sx={{ marginY: 2 }}

                                   onChange={(val) => setDicrip(val.target.value)}

                                   value={dicrip}
                                   id="filled-basic"
                                   fullWidth
                                   label="add discription"
                                   variant="outlined"
                                   required
                                   autoFocus
                        />
                        <Button variant="outlined" onClick={() => update()}>Post</Button>

                    </Box>
                </Box>

            </Grid>
        </div>
    )
}