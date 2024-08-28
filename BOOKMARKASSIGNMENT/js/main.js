








 var sitename=document.getElementById('bookmarkName');
 var siteurl=document.getElementById('Bookurl');
var submitbtn=document.getElementById('submitBtn');
 var datalist=[];

 function createdata() {
    var data ={
     SITENAME:sitename.value,
     SITEURL:siteurl.value

   }
   datalist.push(data);
   display();
    console.log(datalist);
}
  function Reset() {
      sitename.value='';
      siteurl.value='';
 }



 // display section
 function display(){
     var trs=``;
    for(var i=0;i<datalist.length;i++){
         trs+=`
         <tr>
 <td>${i+1}</td>
 <td>${datalist[i].SITENAME}</td>


 <td>  <button onclick="Visit(${i})" class="btn btn-visit" data-index="0">
 <i class="fa-solid fa-eye pe-2"></i>Visit
 </button></td>

 <td><button   onclick="Delete(${i})"  class="btn btn-delete pe-2" data-index="0">
 <i class="fa-solid fa-trash-can"></i>
 Delete
 </button>  </td>    
        
         `
     }
     document.getElementById('tableContent').innerHTML=trs;
 }


 // DELETE SECTION
function Delete(index){
 datalist.splice(index,1);
 display();

}


 // VISIT SECTION
 function Visit(index){
     open(datalist[index].SITEURL);
    
 }




 // validation section 
 function sitenameValidation() {
     var nameRegex = /^[A-Z][a-z]{3,9}$/;
    if (sitename && nameRegex.test(sitename.value)) {
        console.log('match');
        // return true;
    } else {
         console.log('no match');
        // return false;
    }
}
 function siteurlValidation() {
    var urlRegex = /^https?:\/\//g;
     if (siteurl && urlRegex.test(siteurl.value)) {
        console.log('match');
         // return true;
     } else {
         console.log('no match');
         // return false;
     }
 }