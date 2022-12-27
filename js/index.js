var signinPassward = document.querySelector("#signinPassward");
var list=[];
var currentName;
if (localStorage.getItem("Data") != null){
   list = JSON.parse(localStorage.getItem("Data"));
}


    /////////////////Login///////////////////////
   
    if(document.querySelector("#Button1") != null){
        document.querySelector("#Button1").addEventListener("click" , function(){
            if( signinPassward.value == "294101"){
                window.open('mariam.html',"_self");

            }
            else{
              document.querySelector(".NotComplete").classList.remove('d-none');

            }
            ClearDate()
            })}
       
            function ClearDate(){
                signinPassward.value ="";
                document.querySelector(".NotComplete").classList.add('d-none');
             
             }
            
          ////////////////page welcome////////////////////////////
       $('.container-fluid').animate({width:'100%'},1000);
           $('.container-fluid').animate({height:'100vh'},1000,function(){
                    $('.col-md-12').slideDown(1000);
              });
           
           ///////////////////////////////validateAll//////////////////////////////////
          
                function validatesignInPassward() {
            var regex = /^294101$/;
            if (regex.test(signinPassward.value) == true) {
                        document.getElementById("Passward-validation").classList.replace("d-block", "d-none");
        
            return true
            } else {
                document.getElementById("Passward-validation").classList.replace("d-none","d-block");
             return false
            }
        }


        var productName = document.querySelector("[name='productName']");
var url = document.querySelector("[name='url']"); 
var productList = [];
var mainBtn = document.querySelector("mainBtn");

if (localStorage.getItem("productList") != null) {
    productList = JSON.parse(localStorage.getItem("productList"))
    displayProducts()
}
 else {
productList = []

}
function addProduct() {   

  if( validateurl()=== true ){

         var product = {
        name:productName.value,
        url:url.value,

      };
      clearForm();
      productList.push(product);
      localStorage.setItem("productList", JSON.stringify(productList));
      displayProducts();
    } 

  }


function clearForm() {
    productName.value ='';
    url.value=``;
}

function displayProducts() {
    var cartoona = ``;

    for (var i = 0; i < productList.length; i++) {
      cartoona +=  `<tr>
      <td>
      <button class="visit" ><a class= "visit" href="${productList[i].url}" target="_blank" >سماع المحاضرة </a></button>
      </td>
                <td><span class="rout2">${productList[i].name}</span></td>
                <td><span>-${i+1}</span></td>

                </tr>`
    }
    document.getElementById("productData").innerHTML = cartoona;
}

function deleteProduct(index) {
    productList.splice(index, 1)
    displayProducts(productList)
    localStorage.setItem("productList", JSON.stringify(productList))
}



/*function validateProductName() {
    var regex = /^[A-Z][a-z]{3,8}$/;

    if (regex.test(productName.value) == true) {
                document.getElementById("name-validation").classList.replace("d-block", "d-none");

    return true;
    } else {
        document.getElementById("name-validation").classList.replace("d-none","d-block")
     return false ;
    }
}*/

function validateurl() {
var regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

if(regex.test(url.value)==true){
    document.getElementById("url-validation").classList.replace("d-block", "d-none");
    return true;
}
 else {
    document.getElementById("url-validation").classList.replace("d-none","d-block")
 return false ;
}
}