


const counterReducer =(state,action)=>{

    switch(action.type)

    {
        case "Arttır":
            return state+1;
        case "Azalt":
            return state-1;
        case "Sıfırla":
            return 0;
            default: state;
    }
return state
}
export default counterReducer;