// ovde sam stavio promenljivu kako bi je sve funkcije nasledile i kako bi mogla da menja 
// vrednosti u zavisnosti od funkcije
var isWholeFormGood = true;
window.onload = function() {

    //dinamicko ispisivanje sadrzaja
    printMenu();

    const toggleButton = document.getElementsByClassName("toggleButton")[0];
    const navbarLinks = document.getElementsByClassName("navbarLinks")[0];

    toggleButton.addEventListener("click", ()=>{
        navbarLinks.classList.toggle("active");
    });
     
    let page = window.location.pathname;
	if(page == '/' || page == '/index.html') {
        slider();
		printFilteredArticals();
        printIndexSales();
	}

	if(page.indexOf('shop') != -1) {
        printArticals();
        modalForForm();
    }
    
    if(page.indexOf('aboutus') != -1) {
        printOffers();
        offerAccordion();
        var contactButton=document.getElementById("btnContact");
        contactButton.addEventListener("click",function(){
            console.log("sds");
            document.querySelector(".modalForm-bg").classList.add("modalForm-bgActive");
        });
        document.querySelector(".modal-close").addEventListener("click",function(){
            document.querySelector(".modalForm-bg").classList.remove("modalForm-bgActive");
        });
    }
    
    if(page.indexOf('sales') != -1) {
        printSales();
	}

    function printMenu() {

        var menuArray = [
            ["Početna","index.html"],
            ["Prodavnica","shop.html"],
            ["Akcije","sales.html"],
            ["O nama","aboutus.html"],
            ["O autoru","https://danilozdravkovicportfolio.netlify.app/"]
        ];
    
        let printText = "";
        for (let i = 0; i < menuArray.length; i++) {
            printText += `<li>
            <a href="${menuArray[i][1]}">${menuArray[i][0]}</a>
            </li>`
        }
    
        document.getElementById("menuList").innerHTML = printText;
    }
    
    function printFilteredArticals() {
        var filteredArticalsArray =[
            ["bucket_hat_acid.jpg","Bucket hat kaseta"],
            ["crop_top_tshirt.jpg","Crop top majica kiss"],
            ["tshirt_classic.jpg","Majica klasik"],
            ["shorts.jpg","Šorts trouglovi"],
        ];
    
        let printText = "";
        for (let i = 0; i < filteredArticalsArray.length; i++) {
            printText += `<div class="col-12 col-md-6 col-lg-3">
            <img src="img/${filteredArticalsArray[i][0]}" class="img-fluid" alt="${filteredArticalsArray[i][1]}">
            <p class="font-weight-bold mt-3">${filteredArticalsArray[i][1]}</p>
        </div>`
        }
        document.getElementById("filteredArticals").innerHTML = printText;
    }
    
    function printArticals() {
        var articalsArray =[
            ["tshirt_sun.jpg","sun tshirt","Here Comes The Sun Crop Top Majica","1,090 rsd"],
            ["tshirt_camping.jpg","camping tshirt","Lets Go Camping Lines Majica","1,190 rsd"],
            ["hoodie_ricky.jpg","ricky hoodie","Ricky Eintein Duks","2,790 rsd"],
            ["tshirt_ocean.jpg","ocean tshirt","Ocean Drive Majica","1,390 rsd"],
            ["tshirt_hendrix.jpg","hendrix tshirt","Hendrix Silhouette Majica","1,190 rsd"],
            ["tshirt_turtle.jpg","turtle tshirt","Surf Turtle Majica","1,390 rsd"],
            ["bucket_hat_acid.jpg","acid bucket hat","Acid Bucket Hat","1,390 rsd"],
            ["hoodie_akatsuki.jpg","akatsuki hoodie","Akatsuki All Over Unisex Duks","3,390 rsd"],
            ["tshirt_campfire.jpg","campfire tshirt","Campfire Majica","1,190 rsd"]
        ];
    
        let printText = "";
        for (let i = 0; i < articalsArray.length; i++) {
            printText += `<div class="col-12 col-sm-6 col-md-4 mt-5">
            <div class="row">
                <div class="col-12"><img src="img/${articalsArray[i][0]}" class="d-block w-100" alt="${articalsArray[i][1]}"></div>
                <div class="col-8 col-sm-7 mt-3"><p class="boldest">${articalsArray[i][2]}</p></div>
                <div class="col-4 col-sm-5 mt-3"><p class="color-dark-gray boldest text-uppercase text-right">${articalsArray[i][3]}
                </p></div>
                <button type="button" class="btn btn-dark order">Poruči</button>
            </div>
        </div>`
        }
        document.getElementById("articals").innerHTML = printText;
    }

    function modalForForm() {
        var orderButtons=document.getElementsByClassName("order");
        for(let i=0;i<orderButtons.length;i++){
            orderButtons[i].addEventListener("click",function(){
                document.querySelector(".modalForm-bg").classList.add("modalForm-bgActive");
            });
        }
        document.querySelector(".modal-close").addEventListener("click",function(){
            document.querySelector(".modalForm-bg").classList.remove("modalForm-bgActive");
        });
    }
    
    function slider(){
        var pictureSlider = document.querySelector("#pictureSlider");
        setInterval(function(){
            if(pictureSlider.getAttribute("src") == "img/slider_buckethat.jpg"){
                pictureSlider.setAttribute("src","img/slider_hoodie.jpg");
            }
            else{
                pictureSlider.setAttribute("src","img/slider_buckethat.jpg");
            }
        },3000);
    }

    function printIndexSales(){
        var indexSalesArray =[
            ["three_tshirts_sale.jpg","11% popusta","Tri majice"],
            ["tshirt_bag_buckethat_sale.jpg","13% popusta","Majica + šorc + kapa ili ranac"],
            ["tshirt_buckethat_sale.jpg","9% popusta","Majica + kapa"],
            ["two_pillows_sale.jpg","6% popusta","Bilo koja dva proizvoda"],
            ["two_hoodies_sale.jpg","14% popusta","Dva duksa"],
            ["hoodie_tshirt_buckethat_sale.jpg","16% popusta","Duks + majica + kapa"],
        ];

        let printText = "";
        for (let i = 0; i < indexSalesArray.length; i++) {
            printText += ` <div class="col-12 col-sm-6 sale nopadding" style="background-image: url('img/${indexSalesArray[i][0]}');">
            <div class="hover text-center">
                <h3 class="text-uppercase text-white">${indexSalesArray[i][1]}</h3>
                <p class="text-white font-weight-bold">${indexSalesArray[i][2]}</p>
            </div>
        </div>`
        }
        document.getElementById("indexSales").innerHTML = printText;
    }
    
    function printSales(){
        var salesArray =[
            ["three_tshirts_sale.jpg","Uštedite 11% kupovinom 3 majice iz naše ponude","Majice"],
            ["tshirt_bag_buckethat_sale.jpg","Uštedite 9% kupovinom majice i kape","Kape"],
            ["hoodie_tshirt_buckethat_sale.jpg","Uštedite 16% kupovinom duksa, majice i kape","Duksevi"],
            ["two_hoodies_sale.jpg","Uštedite 14% kupovinom dva duksa","Duksevi"],
            ["tshirt_buckethat_sale.jpg","Uštedite 13% kupovinom majice, šorca i kape ili ranca","Šorcevi"],
            ["two_pillows_sale.jpg","Uštedite 6% kupovinom bilo koja dva proizvoda","Torbe"],
        ];

        let printText = "";
        for (let i = 0; i < salesArray.length; i++) {
            printText += ` <div class="col-12 col-lg-6 nopadding bg-color-white sale-article mb-5 mb-lg-0">
                <div class="row sale-article-row m-lg-0">`
                if(i == 2 || i== 3){
                    printText +=`<div class="col-12 col-sm-6 p-lg-0">
                    <img src="img/${salesArray[i][0]}" class="img-fluid img-cover" alt="three tshirts sale">
                </div>
                <div class="col-12 col-sm-6">
                    <h2 class="mt-4 ml-4">${salesArray[i][1]}</h2>
                    <p class="mt-3 ml-4 mb-3">${salesArray[i][2]}</p>
                </div>`
                }
                else{
                    printText += `<div class="col-12 col-sm-6">
                    <h2 class="mt-4 ml-4">${salesArray[i][1]}</h2>
                    <p class="mt-3 ml-4 mb-3">${salesArray[i][2]}</p>
                </div>
                <div class="col-12 col-sm-6 p-lg-0">
                    <img src="img/${salesArray[i][0]}" class="img-fluid img-cover" alt="three tshirts sale">
                </div>`
                }
        printText += `</div>
        </div>`;

        }
        document.getElementById("saleArticals").innerHTML = printText;
    }

    function offerAccordion() {
        document.querySelectorAll(".accordionButton").forEach(button =>{
            button.addEventListener("click",()=>{
                const accordionContent = button.nextElementSibling;

                button.classList.toggle("accordionButtonActive");
                
                if(button.classList.contains("accordionButtonActive")) {

                    accordionContent.style.height = "30vh";
                }
                else{
                    accordionContent.style.height = 0;
                }
            });
        });
    }

    function printOffers() {
        var offersArray =[
            ["01","Štampa po želji","*Podrška dizajnera 24h",
            `Imate ideju, sliku ili tekst koju biste želeli da iskoristite na nekom od naših proizvoda? Naš dizajner je tu da vam 
            pomogne u realizaciji vaše zamisli!`,"#aboutUs-contact","self","Kontaktiraj nas"],
            ["02","Izdrada garderobe za promo svrhe","*Cena,kvalitet i rok",`Za sve naše klijente, bila to fizička ili pravna lica, 
            omogućujemo izradu i štampu na majicama, duksericama i ostalim promotivnim proizvodima, po pristupačnim cenama, u doglednom 
            roku izrade.`,"#aboutUs-contact","self","Kontaktiraj nas"],
            ["03","Saradnja sa dizajnerima","*Affiliate program",`Ukoliko ste dizajner, priključite se našem Affiliate programu.
             Kum vam garantuje isplatu dela prihoda od prodaje svakog proizvoda sa vašim dizajnom. Osnovni cilj ovog programa je 
             poboljšanje same ponude motiva, vodeći računa o tome da i partner i kupac budu zadovoljni.`,
             "https://www.facebook.com/Kod-Kuma-113468250333099/",
            "blank","Saznaj više"],
            ["04","Brendiranje","*Merch program",`Ukoliko imate bazu fanova i potrebu za kreiranjem i prodajom vaše garderobe, nudimo 
            vam mogućnost pokrivanja celokupne proizvodne, promotivne i prodajne logistike. Naš sistem je pouzdan i transparentan,
             i kao takav obezbeđuje uzajamnu korist između nas i naših klijenata.`,"https://www.facebook.com/Kod-Kuma-113468250333099/",
             "blank","Saznaj više"],
            ["05","KodKuma Chloting Shop","*Baza gotovih motiva",`U našoj online prodavnici nalazi se preko 2000 gotovih motiva spremnih
             za štampu na različitim tipovima garderobe poput majica, dukseva, bucket hat kapa i drugih. Takođe, dostupne su mnoge 
             pogodnosti u vidu promo akcija za kupljenih više proizvoda. Pronađi omiljeni motiv i komad garderobe i poruči odmah!`,
             "shop.html","self",
            "Pogledaj ponidu"]
        ];
    
        let printText = "";
        for (let i = 0; i < offersArray.length; i++) {
            printText += `<div class="accordionItem">
            <h2 class="mb-0 accordionButton">
              <button type="button" class="btn btn-link btn-block d-flex flex-row align-items-center">
                <span class="orange-color">${offersArray[i][0]}</span>
                <h3 class="nomargin ml-3 boldest">${offersArray[i][1]}</h3>
              </button>
            </h2>
            <div class="accordionContent ml-3 mt-3">
              <h4 class="boldest">${offersArray[i][2]}</h4>
              <p>${offersArray[i][3]}</p>
              <a class="d-flex align-items-center justify-content-center link-hover-orange" 
              href="${offersArray[i][4]}" target="${offersArray[i][5]}">${offersArray[i][6]}</a>
            </div>
          </div>`
        }
        document.getElementById("accordionItems").innerHTML = printText;
    }


    //regex
    var regexNameLastName = /^[A-ZŠĐŽĆČ][a-zšđžćč]{2,15}(\s[A-ZŠĐŽĆČ][a-zšđžćč]{2,15}){0,2}$/;
    var regexAdress = /^[A-z\dŠĐŽĆČšđžćč\.]+(\s[A-z\dŠĐŽĆČšđžćč\.]+)+,(\s?([A-ZŠĐŽĆČ][a-zšđžćč]+)+)+$/;
    var regexTelNumber = /^06\d{7,8}$/;
    var regEmail = /^[a-z]((\.|-|_)?[a-z0-9]){2,}@[a-z]((\.|-|_)?[a-z0-9]+){2,}\.[a-z]{2,6}$/i;

    $("#btnSendMsg").on("click", function(event) {
        event.preventDefault();
        $("#orderPTag").remove();
        isWholeFormGood=true;

        let emailValue = $("#recipient-name").val();
        let messageValue = $("#message-text").val();
        
        checkInput(emailValue, "Email",$("#recipient-name"),regEmail);
        checkMessageValue(messageValue, "Poruka", $("#message-text"));
    
        console.log(isWholeFormGood);
        if(isWholeFormGood){
            $("#contactForm")[0].reset();
            $("<p id='orderPTag'class='mt-3 mr-3 float-right font-weight-bold'>Vaša poruka je uspešno poslata</p>").
            insertAfter($(".modal-footer"));
        }

    });

    $("#orderForm").on("submit", function(event) {
        event.preventDefault();
        $("#orderPTag").remove();
        isWholeFormGood=true;

        let nameValue = $("#name").val();
        let lastNameValue = $("#lastName").val();
        let adressValue = $("#adress").val();
        let telNumberValue = $("#telNumber").val();
        let noteValue = $("#note").val();

        checkInput(nameValue, "Ime",$("#name"),regexNameLastName);
        checkInput(lastNameValue, "Prezime",$("#lastName"),regexNameLastName);
        checkInput(adressValue,"Adresa",$("#adress"),regexAdress);
        checkInput(telNumberValue,"Telefon",$("#telNumber"),regexTelNumber);
        checkNoteValue(noteValue, "Napomena", $("#note"));

        console.log(isWholeFormGood);
        if(isWholeFormGood){
            $("#orderForm")[0].reset();
            $("<p id='orderPTag'class='mt-3 font-weight-bold'>Vaša porudžbina je zabeležena</p>").insertAfter($("#submitOrder"));
        }

    });

    function checkMessageValue(value, inputName, inputElement) {
        correctInputBorder(true,inputElement);
        $(".span"+inputName).remove();
        if (value.length < 20) {
            correctInputBorder(false,inputElement);
            errorMessage(inputElement, inputName, " mora imati više od 20 karaktera");
            isWholeFormGood=false;
        }
        
    }

    function checkNoteValue(value, inputName, inputElement) {
        correctInputBorder(true,inputElement);
        $(".span"+inputName).remove();
        if (value.length > 0 && value.length < 20) {
            correctInputBorder(false,inputElement);
            errorMessage(inputElement, inputName, " mora imati više od 20 karaktera!");
            isWholeFormGood=false;
        }
        
    }

    function checkInput(value,inputName,inputElement,regex){
        if (isInputFilled(value, inputName,inputElement)) {
            checkRegex(value, inputName,inputElement,regex);
        }
    }

    function checkRegex(nameValue, inputName,inputElement,regex) {
        if (!regex.test(nameValue)) {
            errorMessage(inputElement, inputName, " nema validnu vrednost!");
            correctInputBorder(false, inputElement);
            isWholeFormGood=false;
        }
        else{
            $(".span"+inputName).remove();
            correctInputBorder(true, inputElement);
        }
    }

    function isInputFilled(value, inputName, inputElement) {
        if (value == "") {
            $(".span"+inputName).remove();
            $("#orderPTag").remove();
            errorMessage(inputElement, inputName, " ne sme biti prazno!");
            correctInputBorder(false,inputElement);
            isWholeFormGood=false;
            return false;
        }
        else{
            $(".span"+inputName).remove();
            return true;
        }
        
    }

    function correctInputBorder (isCorrect, input){
        if (isCorrect) {
            input.css("border", "3px solid green");
        }
        else{
            input.css("border", "2px solid red");
        }
    }

    function errorMessage(htmlElement, inputName, message){
        $(`<span class="errorSpan span${inputName}">Polje ${inputName + message} </span>`).insertAfter(htmlElement);
    }

}