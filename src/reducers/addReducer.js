const initData ={
  newData : []
}

const AddReducer = (state = initData, action) => {
  switch (action.type) {
    case 'add':
    const {id, data}  = action.payload;  
    return {
      ...state, 
      newData :    [
        ...state.newData,
      {
        id:id,
        data:data
      }
    ]
    }
    case 'delete':
    const newList = state.newData.filter((elm)=>elm.id !== action.payload)
    return {
      ...state, newData: newList
    }

    case 'update':
    
    
      const indexs = state.newData.findIndex(elm => elm.id === action.payload.id)
      state.newData[indexs] = action.payload 
      // console.log({...state, ...state.newData});
    return  {...state, ...state.newData};
    // case 'get':
    // // const  spData= state.newData.filter((elm)=>elm.id == action.payload)
    //   const index = state.getData.findIndex((elm)=> elm.id == action.payload)
    // return {...state, getData: index}
    
    
   
    default:
      return state;
  }
};

export default AddReducer;