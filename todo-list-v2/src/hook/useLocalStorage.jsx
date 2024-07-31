function useLocalStorage(key){
    function setItem(value){
        try{
            window.localStorage.setItem(key, JSON.stringify(value));
        }catch(error){
            console.log(error);
        }
    }

    function getItem(){
        try{
            let todoList = window.localStorage.getItem(key);
            if(todoList === undefined){
                return null
            }else{
                return JSON.parse(todoList);
            }
        }catch(error){
            console.log(error);
        }
    }

    return {setItem, getItem}
}

export default useLocalStorage;