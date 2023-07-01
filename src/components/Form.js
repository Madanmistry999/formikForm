import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
    Grid, Typography, TextField, Button, RadioGroup, FormControlLabel, Radio,
    Paper, Select, MenuItem, InputLabel, InputAdornment, OutlinedInput, FormControl
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { PlaceOutlined } from '@mui/icons-material';
import * as yup from 'yup';

import style from './style.js';


const Form = () => {

    const [form, setForm] = useState({
        name: '',
        address: '',
        country: '',
        gender: '',
        hobbies: []
    })
    const classes = style()

    const validationSchema = yup.object({
        name: yup.string().required("Username is Required").matches(/^[A-Za-z\s]+$/, "Enter only Alphabetic Characters"),
        address: yup.string().required("Address is Required"),
        country: yup.string().required('Country Selection is Required'),
        gender: yup.string().required("Gender is Required"),
        hobbies: yup.array().required('Atleast one hobby select')
    })

    const formData = useFormik({
        initialValues: form,
        onSubmit: (data) => {
            console.log("Name: " + JSON.stringify(data.name))
            console.log("Address : " + JSON.stringify(data.address))
            console.log("Country: " + JSON.stringify(data.country))
            console.log("Gender : " + JSON.stringify(data.gender))
            console.log("Hobbies are:")
            data.hobbies.map((hobby) => {
                console.log(hobby)
            })
            setForm(data)
        },
        validationSchema: validationSchema,
    })

    return (
        <Grid container alignItems='center' justifyContent='center' marginTop={5}>

            <Grid item xs={11} sm={6} md={6} alignSelf='center'>

                <Paper className={classes.paper} >

                    <Typography variant='h4' gutterBottom mb={5} align='center' fontWeight='bold' color='Highlight'>Create Account</Typography>

                    <form autoComplete='off' className={`${classes.root} ${classes.form}`} onSubmit={formData.handleSubmit}>

                        <TextField
                            id='name'
                            name='name'
                            label='Name'
                            value={formData.values.name}
                            variant='outlined'
                            placeholder='Enter Your Name'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={formData.handleChange}
                            error={formData.touched.name && formData.errors.name}
                            helperText={formData.touched.name && formData.errors.name}
                        />

                        <TextField
                            id='address'
                            name='address'
                            label='Address'
                            multiline
                            rows={2}
                            value={formData.values.address}
                            variant='outlined'
                            placeholder='Enter Address'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PlaceOutlined />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={formData.handleChange}
                            error={formData.touched.address && formData.errors.address}
                            helperText={formData.touched.address && formData.errors.address}
                        />

                        <TextField
                            id='country'
                            name='country'
                            label="Select Countery"
                            value={formData.values.country}
                            variant='outlined'
                            select
                            onChange={formData.handleChange}
                            error={formData.touched.country && formData.errors.country}
                            helperText={formData.touched.country && formData.errors.country}
                        >
                            <MenuItem value="" selected>Select Country</MenuItem>
                            <MenuItem value="India">India</MenuItem>
                            <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                            <MenuItem value="Pakistan">Pakistan</MenuItem>
                            <MenuItem value="Canada">Canada</MenuItem>
                            <MenuItem value="Austeralia">Austeralia</MenuItem>
                            <MenuItem value="New Zealand">New Zealand</MenuItem>
                            <MenuItem value="China">China</MenuItem>
                            <MenuItem value="Russia">Russia</MenuItem>
                        </TextField>

                        <InputLabel id="label">Select Gender</InputLabel>
                        <RadioGroup
                            id='gender'
                            name='gender'
                            value={formData.values.gender}
                            onChange={formData.handleChange}
                            error={formData.touched.gender && formData.errors.gender}
                        >
                            <FormControlLabel value="Male" control={<Radio />} label="Male"></FormControlLabel>
                            <FormControlLabel value="Female" control={<Radio />} label="Female"></FormControlLabel>
                            <FormControlLabel value="Other" control={<Radio />} label="Other"></FormControlLabel>
                        </RadioGroup>

                        <FormControl>
                            <InputLabel id="hobby_label">Select Hobbies</InputLabel>
                            <Select
                                id='hobbies'
                                name='hobbies'
                                label='Select Hobbies'
                                value={formData.values.hobbies}
                                variant='outlined'
                                multiple
                                input={<OutlinedInput label="Select Hobbies" />}
                                onChange={formData.handleChange}
                                error={formData.touched.hobbies && formData.errors.hobbies}
                            >
                                <MenuItem value="Music">Music</MenuItem>
                                <MenuItem value="Travel">Travel</MenuItem>
                                <MenuItem value="Acting">Acting</MenuItem>
                                <MenuItem value="Dance">Dance</MenuItem>
                                <MenuItem value="Reading">Reading</MenuItem>
                                <MenuItem value="Sport">Sport</MenuItem>
                            </Select>
                        </FormControl>


                        <Button variant='contained' color='primary' type='submit' size='large'>Submit</Button>

                    </form>

                </Paper>

            </Grid>


        </Grid >
    )
}

export default Form
