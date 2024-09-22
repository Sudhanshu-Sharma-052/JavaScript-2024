let todo = [];
let req = prompt('please enter your request');
 while(true){
    if(req == 'quit'){
        console.log('quitting app');  
        break;  
    }
    if(req == 'list'){
        console.log('_________________');
        // for(task of todo){
        //     console.log(task) 
        // }
        for(let i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log('______________');
    }
    else if(req == 'add'){
        let task = prompt('please enter the task you want add')
        todo.push(task)
        console.log('task added....');
    }
    else if(req == 'delete'){
        let index = prompt('please enter the task index')
        todo.splice(index, 1);
        console.log('Task deleted');
    } 
    else{
        console.log('Wrong Request........');
    }

       req = prompt('please enter your request')

}
