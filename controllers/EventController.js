module.exports = class EventController {

    static participants = [
        {
            userId: '144592903522484224',
            username: 'nextstagegg',
            startTemp: '00:00:00',
            endTemp: ''
        },
        {
            userId: '144592903522484224',
            username: 'nextstagegg',
            startTemp: '00:00:00',
            endTemp: ''
        },
        {
            userId: '144592903522484224',
            username: 'nextstagegg',
            startTemp: '00:00:00',
            endTemp: ''
        }
    ]

    static convert(val) {
        return getVal(val)
    }

    static idUser = 0
    static eventStarted = false
    static nameUser = ""

    static idMessage = ""
    static idChannelMessage = ""

    static voiceChatId = ""


    static temp = timestamp


    static iniciar() {
        delay(1000 * 60).then(() => { start() })

    }

    static termina() {
        stop()
        this.temp = timestamp
    }


    static addUserEvent(user) {
        listParyEvent.push({
            userId: user.id,
            username: user.username,
            startTemp: timestamp,
            endTemp: ""
        })

        this.participants = listParyEvent

        console.log(listParyEvent)
    }



}



//* -------------------------------- Cronometro --------------------------------

var listParyEvent = []


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//! converte o valor 
function getVal(val) {
    multiplier = val.substr(-1).toLowerCase();
    if (multiplier == "k")
        return parseFloat(val) * 1000;
    else if (multiplier == "m")
        return parseFloat(val) * 1000000;
}


//! Variaves do cronometro
var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;

var timestamp = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

//! funções do cronometro
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

}


function timer() {
    ss++; //? Incrementa +1 na variável ss

    if (ss == 60) { //? Verifica se deu 59 segundos
        ss = 0; //? Volta os segundos para 0
        mm++; //? Adiciona +1 na variável mm

        if (mm == 60) { //? Verifica se deu 59 minutos
            mm = 0;//? Volta os minutos para 0
            hh++;//? Adiciona +1 na variável hora
        }
    }

    //? Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    //? Retorna o valor tratado
    timestamp = format;
    this.temp = timestamp
    console.log(this.temp)

    return format;
}