import React, { useState } from 'react';
import { Slider, Typography, Box, Paper } from '@mui/material';
import "./Bmi.css";

const Bmi = () => {
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(180);

    const handleWeightChange = (e, newValue) => {
        setWeight(newValue);
    };

    const handleHeightChange = (e, newValue) => {
        setHeight(newValue);
    };

    const calculateBMI = () => {
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(1);
    };

    const getBmiRange = (bmi) => {
        if (bmi < 18.5) return "Underweight";
        if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
        if (bmi >= 25 && bmi < 29.9) return "Overweight";
        return "Obese";
    };

    return (
        <Box p={3} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" gutterBottom>BMI Calculator</Typography>
            <Paper elevation={3} className="card" sx={{ mb: 3, p: 2, width: '100%', maxWidth: 500 }}>
                <Typography gutterBottom>Weight: {weight} kg</Typography>
                <Slider
                    value={weight}
                    min={40}
                    max={200}
                    onChange={handleWeightChange}
                    aria-labelledby="weight-slider"
                    valueLabelDisplay="auto"
                />
                <Typography gutterBottom>Height: {height} cm</Typography>
                <Slider
                    value={height}
                    min={140}
                    max={250}
                    onChange={handleHeightChange}
                    aria-labelledby="height-slider"
                    valueLabelDisplay="auto"
                />
            </Paper>
            <Paper elevation={3} className="card" sx={{ p: 2, width: '100%', maxWidth: 500 }}>
                <Typography variant="h6">Your BMI</Typography>
                <Typography variant="h4" className="output">{calculateBMI()}</Typography>
                <Typography variant="h6">Your BMI Range: {getBmiRange(calculateBMI())}</Typography>
            </Paper>
        </Box>
    );
}

export default Bmi;
