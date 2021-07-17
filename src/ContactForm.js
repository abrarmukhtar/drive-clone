import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {initFormData, addRecord, updateRecord} from './actions/index'
import firebase from './fire'


const ContactForm = props => {

  const dataForm = useSelector(state=> state.addReducer.newData);

  const dispatch = useDispatch();
  
  const [inputData, setInputData] = useState(initFormData);
  
  useEffect(()=>{

    if(props.edit.currentId==='')
    {}else
    {
        const indexs = dataForm.findIndex((elm) => elm.id ===  props.edit.currentId)
            setInputData(dataForm[indexs].data);
    }

    //setInputData()
   
  }, [props.edit.currentId])
  // if(EditdataForm.toString() ==''){
    
  // }else
  // {
  //   console.log(EditdataForm[0].data);
  //   setInputData(EditdataForm[0].data)
  // } 

  const inputEvent = e => {
    
    const { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: value
    });
     
    
  };


  const submitEvent = e => {
    e.preventDefault();
    dispatch(addRecord(inputData));
    
    firebase.database().ref('information').push(
      inputData
    )

    setInputData(initFormData);
    document.getElementById('fname').focus();
    

  };

  const updateEvent = e => {
    e.preventDefault();
    const updateData = {
      id: props.edit.currentId,
     data: inputData
    }
    dispatch(updateRecord(updateData));
     
    props.edit.setCurrentId('');
    setInputData(initFormData)
    // setInputData(initFormData);
    // document.getElementById('fname').focus();
    
  };

  return (
    <form onSubmit={props.edit.currentId ===''?  submitEvent: updateEvent} autoComplete="off">
      <div className="col-md-6">
        <label className="form-label">First Name</label>
        <input
          type="text"
          name="fname"
          className="form-control"
          id="fname"
          onChange={inputEvent}
          value={inputData.fname}
          required
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          name="lname"
          className="form-control"
          id="lname"
          onChange={inputEvent}
          value={inputData.lname}
          required
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Father Name</label>
        <input
          type="text"
          name="fatherName"
          className="form-control"
          id="fatherName"
          onChange={inputEvent}
          value={inputData.fatherName}
          required
        />
      </div>

      <div className="col-12">
        
          <input
            type="submit"
            className="btn btn-primary"
            value={props.edit.currentId ===''? "Save": "Update"} 
          />
        
        {/* <button className="btn btn-primary" onClick={clearContant}>
          Clear
        </button> */}
      </div>
    </form>
  );
};

export default ContactForm;
