import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import {useSelector, useDispatch} from 'react-redux'
import { deleteRecord} from './actions';
import firebase  from 'firebase';

const Contacts = () => {
// fdata ? fdata: setfData([...fdata, newData]);

const dataForm = useSelector(state=> state.addReducer.newData);


useEffect(()=>{
  const allDataList = [];
  const firedata = firebase.database().ref('information');
  firedata.on('value', (snapshot)=>{
const allData = snapshot.val();

    for(let id in allData){
      allDataList.push({id,...allData[id]})
    }

  })

  
}
,[])

const [currentId, setCurrentId] = useState('');
const dispatch = useDispatch();
// if(dataForm.formData){
  
// useEffect(()=>{

//   // console.log(dataForm);
  

// }, [currentId])
// console.log(currentState);
//   const dt = dataForm.formData;
//   //console.log(dataForm.formData);
  
//       //setInfo(dataForm.formData  )
  
// }else
// {}


  return (
    <>


<ContactForm  edit={{...{currentId, setCurrentId}}}/>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">FatherName</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {dataForm.map((elem,index) => {
          return (
            <tbody key={elem.id}>
              <tr>
                <td scope="row">{elem.data.fname}</td>
                <td scope="row">{elem.data.lname}</td>
                <td scope="row">{elem.data.fatherName}</td>
                <td>
                  <a
                    href="#"
                    onClick={()=> setCurrentId(elem.id)
                      
                  }
                  >
                    Edit
                  </a>

                  <br />
                  <a
                    href="#"
                    onClick={
                      () => dispatch(deleteRecord(elem.id))
                      
                    
                  }
                  >
                    Delete 
                  </a>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Contacts;
