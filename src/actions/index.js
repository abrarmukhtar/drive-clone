export const initFormData = {
  fname: '',
lname: '',
fatherName: ''
}

export const addRecord = (data)=>{
  
  return {
    type: 'add',
  
    payload:  { 
      id:new Date().getTime().toString(),
      data:data}
    }   
    
};
export const deleteRecord = (id)=>{
  
  return {
    type: 'delete',
    payload:id
  
}
};
export const updateRecord = (data)=>{
  
  return {
    type: 'update',
    payload: data
  
}
};
// export const updateRecord = (data, id)=>{
  
//   return {
//     type: 'update',
  
//     payload:  { 
//       id:id,
//       data:data}
//     }   
    
// };