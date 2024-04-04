import Grid2 from "@mui/material/Unstable_Grid2";
import about_image from "../../assert/about_image.jpg";
import {border} from "@mui/system";
import Foot from "../foot/Foot.jsx";

export default function About() {
    return(
        <div>
            <Grid2 sx={{display :'flex',}}>
                <box  >
                   <div style={{position:'relative' ,left:"40px",}}>
                       <img src={about_image}   alt={"S"} />
                   </div>
                </box>

                <box >
                    <div style={{width:'380px', fontSize:'20px',margin:'10px',position:'relative' ,left:"60px"}}>
                        <p> <h3>About Company</h3><br/><h1>You start the engine and your adventure begins</h1>
                            <hr/><br/>
                            <br/>
                            <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                        </p>
                    </div>
                </box>
            </Grid2>
            <br/>
            <Foot/>
        </div>
    )
}