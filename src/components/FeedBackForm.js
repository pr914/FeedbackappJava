import React, { Component } from 'react'
import {Box,Button,Grid,TextField,Typography} from'@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import axios from 'axios'
export default class FeedBackForm extends Component {
  constructor(prop)
  {
    super(prop);
    this.state={
         select:'',
         radio:'',
         check:'',
         switch:'',
         text:'',
         response:''
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleChangeRadio=this.handleChangeRadio.bind(this);
    this.handleChangeText=this.handleChangeText.bind(this);
    this.handleOnChangeSwitch=this.handleOnChangeSwitch.bind(this);
    this.handleonChangeCheckBox=this.handleonChangeCheckBox.bind(this);
  }
   handleChange = (event) => {
    this.setState({select:event.target.value})
  };
  handleChangeRadio=(event)=>
  {
    event.preventDefault();
     this.setState({radio:event.target.value})
     console.log(this.state.radio)
  }

  handleChangeRadio1=(event)=>
  {
    this.setState({radio:event.target.value})
    
  }
  handleonChangeCheckBox=(event)=>
  {
     this.setState({check:event.target.value})
     console.log(this.state.check)
  }
  handleOnChangeSwitch=(event)=>
  {
    this.setState({switch:event.target.value})
  }
  handleChangeText=(event)=>
  {
    console.log(event.target.value)
    this.setState({text:event.target.value})
  }
  handleSubmit=()=>
  {
    const responseData={
      "question1":this.state.radio,
      "question2":this.state.check,
      "question3":this.state.select,
      "question4":this.state.switch,
      "question5":this.state.text
    }
    console.log(responseData)
     axios.post('http://localhost:8090/v1/employee/feedback',responseData).then((res)=>
     {
        this.setState({response:res.data})
        console.log(res.data)
     })
  }
  render() {
    return (
      <div>
          
      {this.state.response?<Typography>{this.state.response}</Typography>:<Box bgcolor={'ivory'}color={'black'} overflow={'hidden'} display="flex" flexDirection={"column"} maxWidth={400} 
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={5}
            padding={5}
            borderRadius={5}
            
            boxShadow={'5px 5px 10px #ccc'}
            sx={{":hover":{
                boxShadow:"10px 10px 20px #ccc"
            }}}>
        <Grid container spacing={2}>
            
          <Grid item xs={8} md={12}>
          
            <FormControl>
                
            <FormControlLabel control={<Typography fontStyle={"italic"} fontSize={"20px"} color={"burlywood"} >How would you rate your level of happiness at work?</Typography>}></FormControlLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        name="radio-buttons-group"
                        onChange={this.handleChangeRadio1}  
                        
                    >
                        <FormControlLabel value="1"  control={<Radio  />} label="1" />
                        <FormControlLabel value="2" control={<Radio  />} label="2" />
                        <FormControlLabel value="3" control={<Radio  />} label="3" />
                        <FormControlLabel value="4" control={<Radio  />} label="4" />
                        <FormControlLabel value="5"  control={<Radio   />} label="5" />
                        
                        
                    </RadioGroup>
            </FormControl>
            </Grid>
           
            <Grid item  md={12}>
           <FormControl>
            <FormGroup onChange={this.handleonChangeCheckBox}>
            <FormControlLabel control={<Typography fontFamily={'cursive'} fontStyle={"italic"} fontSize={"20px"} color={"cadetblue"}>Do you look forward to coming to work each day?</Typography>}></FormControlLabel>
                <FormControlLabel control={<Checkbox value={"Yes"}  />} label="Yes"  />
                <FormControlLabel  control={<Checkbox value={"No"}/>} label="No" />
                </FormGroup>
                </FormControl>
            </Grid>
            <br />
            <Grid item md={12}>
           <FormControl>
           
           <FormGroup>
            <FormControlLabel control={<Typography fontFamily={'cursive'} fontStyle={"italic"} fontSize={"20px"} color={"darkolivegreen"}>On a scale of 1 to 10, how challenged are you on a daily basis at work?</Typography>}>
            
            </FormControlLabel>
            <br/>
            <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.question2}
          label="Age"
          onChange={this.handleChange}
        >
          <MenuItem value={"0"}>0</MenuItem>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"6"}>6</MenuItem>
          <MenuItem value={"7"}>7</MenuItem>
          <MenuItem value={"8"}>8</MenuItem>
          <MenuItem value={"9"}>9</MenuItem>
          <MenuItem value={"10"}>10</MenuItem>

          
        </Select>
           </FormGroup>
           </FormControl>
            
           </Grid>
           <br/>
           
            <Grid item md={12}>
               <FormControl>
               <FormGroup onChange={this.handleOnChangeSwitch}>
               <FormControlLabel control={<Typography fontFamily={'cursive'} fontStyle={"italic"} fontSize={"20px"} color={"darkolivegreen"}>Do you have a comfortable place to work?</Typography>}></FormControlLabel>
               
                <FormControlLabel control={<Switch color='primary' value={"Yes"} />} label="Yes" />
                <FormControlLabel color='secondary' control={<Switch value={"No"} color='secondary'/>} label="No" />
            </FormGroup>
               </FormControl>
            </Grid>
            <Grid item md={12}>
          <FormControl>
           <FormGroup> 
            <FormControlLabel
            control={<Typography fontStyle={"italic"} fontFamily={'cursive'} fontSize={"20px"} color={"cadetblue"}>What do you like most about working here?</Typography>}></FormControlLabel>
            <FormControlLabel control={<TextField onChange={this.handleChangeText} fullWidth label="fullWidth" id="fullWidth" />} />
          </FormGroup>
          </FormControl>
            

            </Grid><br/><br/>
          
               
              
        </Grid>
        <br />
        <br />
        <Button variant='contained' size='large'Style={"background-color:#833AB4"} 
        onClick={this.handleSubmit}>
          <Typography
          fontFamily={'cursive'} fontStyle={"italic"} fontSize={"20px"}
          
          >Submit</Typography></Button>
            </Box>}
        
      </div>
    )
  }
}
