export const FormatToElement= (obj)=>{
    const stack=[obj];
    while(stack?.length>0){
        const curruntObj=stack.pop();
        Object.keys(curruntObj).forEach(key=>{


            if(typeof curruntObj[key]==='object'&&curruntObj[key] !=null)
           {
            stack.push(curruntObj[key]);
           }
           if(key==="pagesId"){
            curruntObj.value=curruntObj[key];
            delete curruntObj[key]
           }
           if(key==="pageName"){
            curruntObj.label=curruntObj[key];
            delete curruntObj[key]
           }
           if(key==="inversePagPages"){
            curruntObj.children=curruntObj[key];
            delete curruntObj[key]
           }

        }
        
        )
    }
    
};
