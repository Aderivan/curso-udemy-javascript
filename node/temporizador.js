const schedule = require('node-schedule')


//de trás pra frente: Executa na segunda, qualquer mês, qualquer dia do mês, às 12 horas, qualquer minuto e de 5 em 5 segundos
const tarefa1 = schedule.scheduleJob('*/5 * 13 * * 1', function () {
    console.log('Executando Tarela 1!', new Date().getSeconds())
}) 

setTimeout(function() {
    tarefa1.cancel()
    console.log("Cancelado a tarefa 1")
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = new schedule.Range(1, 5)
regra.hour = 13
regra.second = 30

const regra2 = schedule.scheduleJob(regra, function () {
    console.log("Executando tarefa 2!", new Date().getSeconds())
})