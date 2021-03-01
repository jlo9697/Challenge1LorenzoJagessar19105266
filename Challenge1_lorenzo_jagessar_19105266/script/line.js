var ctx = document.getElementById('myChart3').getContext('2d');
Chart.defaults.global.defaultFontFamily='Poppins' //standaard font-family van de grafiek, zelfde geldt voor de andere grafieken
Chart.defaults.global.defaultFontColor='black'//standaard kleur van de grafiek, zelfde geldt voor de andere grafieken

var chart = new Chart(ctx, {
    //type grafiek: lijngrafiek
    type:'line',

    //data voor de grafiek
    data:{
        labels:['January','February','March','April','May'],
        datasets:[{
            label:'Travel Distance in Lightyears',
            backgroundColor:'#fff220',
            borderColor:'#ff8220',
            data:[8,6,16,12,14],
            fill:false, // de lijngrafiek niet opvullen met kleur, alleen de lijn laten zien 
            borderDash:[10,5], //hiermee maak je er geen hele lijn van, maar bestaat het uit streepjes
            pointRadius: 5 // de puntgrootte aanpassen, groter gemaakt zodat de punten beter te zien zijn
        }]

    },

    //opties
    options:{
        legend:{
            display: true, //legenda zichtbaar maken
            onClick:null, //kan niet klikken op de legenda, gedaan zodat je niet de grafiek weg kan klikken
        },
        layout:{
            padding:{
                top: 5,
                bottom: 10,
                left: 5,
                right: 20
            }
        }
    }

})