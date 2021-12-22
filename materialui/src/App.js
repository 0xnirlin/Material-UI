import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { AppBar, CircularProgress, Grid, InputLabel, LinearProgress, paperClasses, Slider, TextField,Toolbar, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';


function App() {
  
  const [progress, setProgress] = useState(true)
  const useStyles = makeStyles((theme) => ({
    gridClassName: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
      ,
    },
   // other classes here
  }));
  const stopLoading = () =>
  {
    setProgress(!progress);
  }
  const classes = useStyles();

  return (
    <div className="App">
    {/* {progress &&   <LinearProgress>  </LinearProgress> }
    
    
      <Button variant="contained" color="secondary" onClick={stopLoading} style={{background: "black"}} >
        Stop
      </Button>
      <InputLabel htmlFor="input-with-icon-adornment">
        With a start adornment
      </InputLabel>
      <TextField label="outlined" variant="outlined" icons multiline ></TextField>
      <TextField label="standard" variant="standard"></TextField>
      <TextField label="outlined" variant="filled"></TextField>
      <div className='small'>
        <Slider
          size="large"
          defaultValue={1000}
          aria-label="small"
          valueLabelDisplay="auto"
          step={10}
          min = {10}
          max = {100}
          marks
    
          // width = "30px"
          >

        </Slider>
      </div> */}
      <Grid container spacing = {3} >
        <Grid item xs = {12} className={classes.gridClassName}>
            <h1>Hello World</h1>
        </Grid>
        <Grid item xs = {6} >
            Hello Worlds
        </Grid>
        <Grid item xs = {6} >
            Hello Worlds
        </Grid>

      </Grid>
      <Paper elevation= {2}>
        <h3>a</h3>
        <h3>b</h3>
        <h3>c</h3>
      </Paper>
      
    </div>
  );
}

export default App;


