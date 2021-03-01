Chart.defaults.global.defaultFontFamily='Poppins' //standaard font-family van de grafiek, zelfde geldt voor de andere grafieken
Chart.defaults.global.defaultFontColor='black' //standaard kleur van de grafiek, zelfde geldt voor de andere grafieken

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    //type grafiek: donutgrafiek
    type:'doughnut',

    //data voor de grafiek
    data:{
        labels:['Health Left','Health Lost'],
        datasets:[{
            label:'', //erin gehouden, werkte niet zonder de label
            backgroundColor:['#68b02b','rgba(244, 123, 116, 0.5)'] , //rgba waarde gebruikt om de opacity  aan te kunnen passen
            borderColor:['#68b02b','rgba(244, 123, 116, 0.5)'],
            data:[60,40],
        }]

    },

    //opties
    options:{
        cutoutPercentage: 40, // aangeven hoe groot het midden is (het gat in het midden)
        legend:{
            onClick: null //gedaan zodat je er niet op kan klikken
        },
        layout:{
            padding:{
                bottom: 10,
            }
        }
        
    }

})