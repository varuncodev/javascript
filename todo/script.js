
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
        div.innerHTML =` <p class ="ptext">${element.text}</p>
         <input type ="text" class="editinput" placeholder="Enter your task here" value ="${element.text}">

         <div>
           <button class ="deletebtn">DELETE</button>
           <button class ="editbtn">EDIT</button>
           <button class= "savebtn">SAVE</button>
         </div>`
         
            let deletebtn =div.querySelector('.deletebtn')
            let editbtn =div.querySelector('.editbtn')
            let savebtn =div.querySelector('.savebtn')
            let edit =div.querySelector('.editinput')
            let ptext =div.querySelector('.ptext')

            deletebtn.addEventListener('click',function (){
            deletedata(element.id)

            })
            
            editbtn.addEventListener('click', function (){
            
            editbtn.style.display ='none'
            savebtn.style.display ='inline'
            ptext.style.display ='none'
            edit.style.display ='inline'
            })

            savebtn.addEventListener('click', async function (){
            let editval = edit.value
            await putdata(element.id , editval)
            if(response.status ===200){
            apidata()
            
            editbtn.style.display ='inline'
            savebtn.style.display ='none'  
            ptext.style.display ='inline'
            edit.style.display ='none'
            }
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
        input.value =''
       
    }}     


    async function putdata(id,value){
//  console.log(id,value);
    // console.log(task)
    let objectdata ={
        text:value.trim()
    }

    let response = await fetch(`${API_URL}/${id}`,{
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(objectdata),
       
    })

    // console.log(response);
    // if(response.status ===200){
    //     apidata()
    // }
    return response;
}    

 async function deletedata(id){
    // console.log(id);
        let response = await fetch(`${API_URL}/${id}`,{
            method:'DELETE',
           
        })
        if(response.status ===200){
            apidata()
        }   
          
}




    
apidata()