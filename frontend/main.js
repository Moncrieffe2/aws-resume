window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const funvtionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
    }).catch(function(error){
        console.log(error);
    });
    return count;
    } 
