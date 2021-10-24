let digital = () =>{
    var date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();

    let AmorPm = hours >=12 ? 'Pm' :'Am';
    let today = date.toLocaleDateString();

    document.getElementById('hours').innerHTML = hours ;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('second').innerHTML = second;
    document.getElementById('AmorPm').innerHTML= AmorPm;
    document.getElementById('date').innerHTML = today;
    setTimeout(digital,500)

}
digital ();