import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { TextField, Button, Grid, Paper, Typography, CircularProgress } from "@mui/material";
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../firebase/setup';

function PhoneSignin() {
    const [phone, setPhone] = useState("");
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const sendOtp = async () => {
        try {
            setLoading(true);
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
            setUser(confirmation);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.error(err);
        }
    }

    const verifyOtp = async () => {
        try {
            setLoading(true);
            const data = await user.confirm(otp);
            console.log(data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.error(err);
        }
    }

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', background: 'white', width:"92%" }}>
                    <Typography variant="h5" style={{ marginBottom: '20px', color: '#333' }}>Sign in with your phone</Typography>
                    <div>
                        <PhoneInput
                            country={"in"}
                            value={phone}
                            onChange={(phone) => setPhone("+" + phone)}
                            inputStyle={{ width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                        />
                        <Button onClick={sendOtp} variant='contained' style={{ marginBottom: '10px', marginTop:"10px",background: '#667eea', color: 'white', borderRadius: '5px', padding: '10px', width: '100%' }}>
                            {loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : "Send OTP"}
                        </Button>
                        <div id="recaptcha"></div>
                        <TextField
                            onChange={(e) => setOtp(e.target.value)}
                            variant='outlined'
                            size="small"
                            label="Enter OTP"
                            fullWidth
                            style={{ marginBottom: '10px', width:"100%"}}
                            InputProps={{ style: { borderRadius: '5px', background: '#f9f9f9' } }}
                        />
                        <Button onClick={verifyOtp} variant='contained' style={{ background: '#764ba2', color: 'white', borderRadius: '5px', padding: '10px', width: '100%' }}>
                            {loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : "Verify OTP"}
                        </Button>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default PhoneSignin;
