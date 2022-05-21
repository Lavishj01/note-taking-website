console.log("welcome");
showNotes();
// if user add a note add a local storage
let addbtn=document.getElementById("addbtn")
addbtn.addEventListener("click",()=>{
    let addtxt=document.getElementById("addtxt")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesobj = [];
    } else {
      notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
  //   console.log(notesObj);
    showNotes();
  });
function showNotes(){
    let notes=localStorage.getItem("notes")
    if(notes == null){
        notesobj=[];
    }else{
        notesobj=JSON.parse(notes);
    }
    let html="";
    notesobj.forEach(function(element,index) {
    html +=` 
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text"> ${element}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
    </div>
</div>`
    
    });
    let notesEl=document.getElementById("notes")
    if(notesobj.length!=0){
    notesEl.innerHTML=html;
    }else{
        notesEl.innerHTML="No note to show please add a note"
    }
}
function deleteNote(index){
    let notes=localStorage.getItem("notes")
    if(notes == null){
        notesobj=[];
    }else{
        notesobj=JSON.parse(notes);
    }
notesobj.splice(index,1)
localStorage.setItem("notes",JSON.stringify(notesobj))
showNotes();
}
// let search=document.getElementById("searchtxt")
// search.addEventListener("input",()=>{
//     let inputVal=search.value;
//     console.log("input event fired",inputVal)
//     noteCard=document.getElementsByClassName("noteCard")
//     Array.from(noteCard).forEach((e)=>{
//         let cardtxt=e.getElementsByTagName("p")[0]
//      if(cardtxt.includes(inputVal)){
//          e.style.display="block"
//      }else{
//          e.style.display="none";
//      }
//     })
// })



