Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontFamily='Poppins' //standaard font-family van de grafiek, zelfde geldt voor de andere grafieken
Chart.defaults.global.defaultFontColor='black' //standaard kleur van de grafiek, zelfde geldt voor de andere grafieken

var ctx = document.getElementById('myChart2').getContext('2d');

var chart = new Chart(ctx, {
    //type grafiek: kolomgrafiek
    type:'bar',

    //data voor de grafiek
    // apart gehouden omdat ze anders onder één data worden gezien
    data:{
        labels:[''],
        datasets:[{
            label:'Water',
            data:[68],
            backgroundColor:['#348ec9'],
            borderColor:['#348ec9']
        },{
            label:'Meat',
            data:[83],
            backgroundColor:['#f47b74'],
            borderColor:['#f47b74']
        },{
            label:'Veggies',
            data:[54],
            backgroundColor:['#68b02b'],
            borderColor:['#68b02b'], 
        },{
            label:'Sweets',
            data:[70],
            backgroundColor:['#e49ac0'],
            borderColor: ['#e49ac0']
        },],
    },

    //opties
    options:{
        responsive: true, 
        legend:{
            position:'right', //de legenda komt aan de rechterkant
            display: true, //je kan de display nu zien
            labels:{
                fontColor:'black', //de kleur van de tekst wordt zwart
                fontFamily:'Poppins', //de font-family is Poppins
                fontSize:10.6,
            },
        },
        scales:{
            yAxes:[{
                ticks:{
                    min:0 //de y-as begint te tellen vanaf 0 ipv vanaf de laagste data value
                }
            }]
        },
        hover:{
            mode:'nearest',
        },
        layout:{
            padding:{
                left: 20,
                right: 3,
                top: 25,
                bottom: 0,
            }
        }
    }

})