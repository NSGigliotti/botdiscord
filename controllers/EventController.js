module.exports = class EventController {

    static participants = []

    static idUser = 0
    static eventStarted = false
    static nameUser = ""

    static idMessage = ""
    static idChannelMessage = ""

    static voiceChatId = ""


    static temp

    static iniciar() {
        start()
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


//! Variaves do cronometro
var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;

var timestamp;

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

    return format;
}