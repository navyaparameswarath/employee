import { Button, TextField } from '@material-ui/core'
import React from 'react'

const Loginpage = () => {
    

    return (
        <div>
            <TextField variant="outlined"
            fullWidth="50"
            label="Name"
            margin="normal"
            type="text"
            ></TextField>

            <TextField variant="outlined"
            fullWidth="50"
            label="Address"
            margin="normal"
            type="text"
        
            ></TextField>

            <TextField variant="outlined"
            fullWidth="50"
            label="Pincode"
            margin="normal"
            type="number"
            ></TextField>

            <TextField variant="outlined"
            fullWidth="50"
            label="Mobile Number"
            margin="normal"
            type="number"
            ></TextField>


            <TextField variant="outlined"
            fullWidth="50"
            label="Email Id"
            margin="normal"
            type="email"
            ></TextField>

            <TextField variant="outlined"
            fullWidth="50"
            label="Password"
            margin="normal"
            type="password"
            ></TextField>
            
            <TextField variant="outlined"
            fullWidth="50"
            label="Confirm Password"
            margin="normal"
            type="password"
            ></TextField>
    <Button fullWidth
    color="primary"
    varient="container"
    >Submit</Button>
        </div>
    )
}

export default Loginpage
