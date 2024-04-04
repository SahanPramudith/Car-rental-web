import Grid2 from "@mui/material/Unstable_Grid2";

export default function Foot() {
    return(
        <div>
            <Grid2 sx={{display: 'flex', justifyContent: 'space-around', bgcolor: '#f8eeee',height:"200px",padding:'20px'}}>
                <box>
                    <div>
                        <h2>car Rental</h2>
                        <hr/>
                        <br/>
                        <h4 style={{fontStretch: 'inherit'}}>Use securing confined his shutters.<br/> Delightful as he
                            it acceptance an <br/>solicitude discretion.<br/><br/></h4>
                    </div>
                </box>
                <box>
                    <h2>About</h2>
                    <hr/>
                    <br/>
                    <p>Certain but she but shyness why cottage.<br/>
                        Guy the put instrument sir entreaties affronting.<br/>
                         Motionless if no to<br/>
                        affronting imprudence no precaution..</p>

            </box>
            <box>
                <h2>WORKING HOURS</h2>
                <hr/>
                <br/>
                <div>Mon - Fri: 09:00AM - 09:00PM   </div><br/>
                <div>Sat: 09:00AM - 07:00PM  </div><br/>
                Sun: Closed
            </box>


        </Grid2>
</div>

)
}