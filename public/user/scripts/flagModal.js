/*Flag Modal*/


    let flagModalTrigger = document.getElementById("flagModalTrigger");
    flagModalTrigger.addEventListener("click", function displayModal() {
        flagModal.style.display = "block"
        flagModalContent.style.display = "block"
    });

    let flagModalCross = document.getElementById("flagModalCross")
    flagModalCross.addEventListener("click", function removeModal() {
            flagModal.style.display = "none"
        });

    let flagModalContent = document.getElementById("flagModalContent")
    let flagModalSearch = document.getElementById("flagModalSearch") 
    let flagModalCountryBox = document.getElementById("flagModalCountryBox")


/*Flag Modal Search Border Color Change*/

flagModalSearch.addEventListener("click",function flagModalSearchOnClick(e) {
    e.preventDefault;
    flagModalSearch.style.borderColor="blue"
    flagModalSearch.style["boxShadow"] = "2px"
})


/*Fetching data for Flag Modal */

    let url = "https://countriesnow.space/api/v0.1/countries/flag/images"


fetch(url)
.then(res=>{
    return res.json()
})
.then(res=>{
    appendFlagAndCountryToModal(res.data)
});
   let search_bar=document.getElementById("flagModalSearch");
   search_bar.addEventListener("keydown",fn);
   let main_data;
   let search_txt=search_bar.value;
   let appendFlagAndCountryToModal = (data) => {
    main_data=data;
   
}

function fn()
{
    let search_bar=document.getElementById("flagModalSearch");
    let search_txt=search_bar.value;
    flagModalCountryBox.innerHTML="";
    let arr=[];
    main_data.forEach(item => {
        let txt = search_txt.toLowerCase();
       let title = item.name.toLowerCase();
        if (title.indexOf(search_txt) != -1) {
          arr.push(item);
        }

    });

    arr.forEach(({name,flag} = arr) => {
        let div = document.createElement("div")
        let flagName = document.createElement("h3")
        flagName.append(name)
        console.log(name);
        div.append(flagName)
        flagModalCountryBox.append(div)
    });
}