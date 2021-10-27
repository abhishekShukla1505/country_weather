const divContainer = document.getElementById("div_container");


let btn = document.getElementById("btn");
btn.innerHTML = "click here";
btn.addEventListener('click', getdata)
function showData(fetchdata) {
    const first_api = "https://restcountries.com/v3.1/all";
    fetch(first_api).then(repsone => repsone.json()).then(data => {


        for (let i = 0; i < data.length; i++) {
            let country_name = data[i]['name']['common'];
            let pop = data[i]['population'];
            let t = data[i]['flags']['png'];
            let region = data[i]['region'];
            let cc = data[i]['cca2'];
            //var t = `${ur}`;
            createData(country_name, pop, t, region,cc);
        }



    }).catch(err => {
        alert(err);
    })
}
function getdata(createData) {
    showData(createData);
}


function createData(country_name, pop, t, region,cc) {
    const d = document.createElement("div");
    d.classList.add("innnerDiv");
    divContainer.appendChild(d);
    //-----------------
    const f1 = document.createElement("div");
    f1.classList.add("countyname");
    d.appendChild(f1);
    //-----------------
    const f = document.createElement("div");
    f.classList.add("flag_innnerDiv");
    f.setAttribute("style", "background-image: url("+t+"); background-size: cover;");
        d.appendChild(f);
    //======================


    //==============================
    const c = document.createElement("span");
    c.innerHTML = country_name;
    f1.appendChild(c);

    //=====================================

    const f2 = document.createElement("div");
    f2.classList.add("Population");
    d.appendChild(f2);

    const c1 = document.createElement("span");
    c1.innerHTML = "Population : " + pop;
    f2.appendChild(c1);
    //===============================
    const f3 = document.createElement("div");
    f3.classList.add("Population");
    d.appendChild(f3);

    const c2 = document.createElement("span");
    c2.innerHTML = "Area : " + region;
    f3.appendChild(c2);
    ///===============================
    const f4 = document.createElement("div");
    f4.classList.add("Population");
    d.appendChild(f4);

    const c3 = document.createElement("span");
    c3.innerHTML = "Country code : "+cc;
    f4.appendChild(c3);




    const wbtn = document.createElement("button");
    wbtn.innerHTML = "weather";
    wbtn.addEventListener('click',()=>{
        getpopupdata(country_name);
    })
    wbtn.classList.add("wbtn");
    d.appendChild(wbtn);

}
let q="mali"
function getpopupdata(q){
    document.getElementById('popout').style.display='block';
   const api="https://api.openweathermap.org/data/2.5/weather?q="+q+"&appid=e855875d86159eccde0fb44231644630";
   fetch(api).then(response=>response.json()).then((data)=>{
                let n=data.name;
                let h=data.main['humidity'];
                let w=data.wind['speed'];
                let m=data.weather[0]['main'];
                let des=data.weather[0]['description'];
                document.getElementById("span_county_name").innerHTML=n;
                document.getElementById("span_humidity").innerHTML=h;
                document.getElementById("span_Wind_Speed").innerHTML=w;
                document.getElementById("span_main").innerHTML=m;
                document.getElementById("span_description").innerHTML=des;


   }).catch(err=>{
       alert(err);
   })
}
document.getElementById('closeBtn').addEventListener('click',()=>{
    document.getElementById('popout').style.display='none';
})

