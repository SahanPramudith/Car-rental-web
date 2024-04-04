import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions, Grid} from '@mui/material';
import {useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

export default function Viwe() {

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("http://localhost:3000/post/getpost")

            .then(function (response) {
                console.log(response.data);
                setData(response.data);
            });
    }, []);



    function deletepost(id) {

       const  conform=window.confirm("would you like delete post ?");

       if (conform){
           axios.delete("http://localhost:3000/post/deletepost/"+id)
               .then(response => {
                   console.log("done")
                   window.location.reload()
               })
               .catch(error => {
                   console.error(error);
               });
       }



    }


    return (

        <div>
            <div
                style={{display: 'flex', justifyContent: 'center', backgroundColor: '#565050', color: '#ffefef'}}>view post
            </div>
            <Grid style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {data.map((val, index) => (<Card sx={{maxWidth: 345, margin: 2,}}>
                    <CardActionArea>
                        {val.id}
                        <img src={`http://localhost:3000/` + val.image}
                             style={{width: '345px', height: "200px", display: "flex", flexWrap: "wrap"}}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {val.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary"

                                onClick={() => deletepost(val.id)}
                        >
                            Delete
                        </Button>
                        <NavLink to={`/update/${val.id}`}>

                            <Button size="small" color="primary">
                                update
                            </Button>
                        </NavLink>


                    </CardActions>
                </Card>))}
            </Grid>


        </div>

    );
}