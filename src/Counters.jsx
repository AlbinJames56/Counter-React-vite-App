import React, { useEffect, useState, useRef } from 'react';
import { Button, TextField } from '@mui/material'
import "./Counter.css"

function Counters() {
    const [counter, setCounter] = useState(0);
    const intervalRef = useRef(null);
    const [progress, setProgress] = useState(0)
    const [color, setColor] = useState('#4caf50');
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function start() {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setColor(getRandomColor()); // Update the color state
                setProgress(0); // Reset progress to 0
                setTimeout(() => setProgress(360), 10); // Animate to 360 degrees
                setCounter(prevCounter => prevCounter + 1);
            },1000);
        }
    }

    function pause() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setProgress(0); 
        }
    }

    function reset() {
        pause(); // Clear the interval when resetting
        setCounter(0);
        setProgress(0); 
        setColor('#4caf50');
    }

    useEffect(() => {
        return () => pause(); // Cleanup on unmount
    }, []);

    return (
        <div className='container mt-5'>
            <h1 className='text-center text-primary'>Counter App</h1>
            <div className='circle mt-4'style={{ '--progress-degree': `${progress}deg`, '--circle-color': color }}>
                    <h1 className='counter'>{counter}</h1>
                </div>
            <div className="text-center">
            <Button variant="contained" className='m-5 bg-success' onClick={start}>Start</Button>
            <Button variant="contained" className='m-5 ' onClick={pause}>Pause</Button>
            <Button variant="contained" className='m-5 bg-danger' onClick={reset}>Reset</Button>
            </div>
        </div>
    );
}

export default Counters;
