
export const cloneLinks = (data) =>{

    let links = new Map();
    if(data.length == 0){
        return links;
    }

    data.map(v=>{
        links.set(v.name,createChildList(v.child))
    })

    return links;
}

function createChildList(data){

    let childList = new Map();

    if(data.length <= 0){
        return childList;
    }
    
    data.map(v=>{
        const {name,url} = v
        childList.set(name,url)
    })

    return childList;
}
