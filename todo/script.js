
let input =document.querySelector('#taskinput')
let addbtn =document.querySelector('.addbtn')
let taskcontainer = document.querySelector('.taskcontainer');
let API_URL = 'https://69cbb82e0b417a19e07b1b1f.mockapi.io/todoapp/v1/todos';

addbtn.addEventListener('click', postdata)





async function apidata(){
    let response =await fetch(API_URL)
    let data = await response.json()

   let div = document.createElement('div');
    if(data){
        taskcontainer.innerHTML = '';
        data.forEach(element => {
        let div = document.createElement('div');
        div.className = 'task';
        // console.log(div);
        div.innerHTML =` <p>${element.text}</p>
         <div>
           <button class ="deletebtn">DELETE</button>
           <button>EDIT</button>
         </div>`
         
            let deletebtn =div.querySelector('.deletebtn')
            deletebtn.addEventListener('click',function (){
             deletedata(element.id)
           
     })


         taskcontainer.append(div);
    });
    }}

async function postdata(){
 

     let task = input.value.trim()
        if(task ===''){
        alert('Please enter a task')
        return ;
    }
    // console.log(task)
    let objectdata ={
        text:task.trim()
    }

    let response = await fetch(API_URL,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(objectdata),
       
    })

    if(response.status ===201){
        apidata()
    }}     

 async function deletedata(id){
    console.log(id);
        let response = await fetch(`${API_URL}/${id}`,{
            method:'DELETE',
           
        })
        if(response.status ===200){
            apidata()
        }   


          
}

    
apidata()