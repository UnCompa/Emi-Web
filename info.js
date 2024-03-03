function actualizarContador() {
  const fechaEspecifica = new Date('2024-01-08T19:32');
  const fechaActual = new Date();
  const diferencia = fechaActual.getTime() - fechaEspecifica.getTime();

  const segundos = Math.floor(diferencia / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const meses = Math.floor(dias / 30);
  const anos = Math.floor(meses / 12);

  let time1 = document.getElementById('time1')
  time1.textContent = anos
  let time2 = document.getElementById('time2')
  time2.textContent = meses % 12
  let time3 = document.getElementById('time3')
  time3.textContent = dias % 30
  let time4 = document.getElementById('time4')
  time4.textContent = horas % 24
  let time5 = document.getElementById('time5')
  time5.textContent = minutos % 60
  let time6 = document.getElementById('time6')
  time6.textContent = segundos % 60
}

setInterval(actualizarContador, 1000);
actualizarContador();

function especial() {
  const fechaEspecifica = new Date("2008-02-22T07:00");
  const fechaActual = new Date();
  const diferencia = fechaActual.getTime() - fechaEspecifica.getTime();

  const segundos = Math.floor(diferencia / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const meses = Math.floor(dias / 30.4);
  const anos = Math.floor(meses / 12);

  let timeC1 = document.getElementById('timeC1')
  timeC1.textContent = anos
  let timeC2 = document.getElementById('timeC2')
  timeC2.textContent = meses % 12
  let timeC3 = document.getElementById('timeC3')
  timeC3.textContent = dias % 30
  let timeC4 = document.getElementById('timeC4')
  timeC4.textContent = horas % 24
  let timeC5 = document.getElementById('timeC5')
  timeC5.textContent = minutos % 60
  let timeC6 = document.getElementById('timeC6')
  timeC6.textContent = segundos % 60
}

setInterval(especial, 1000);
especial();

function samAmistad() {
  const fechaEspecifica = new Date("2017-02-02T10:10");
  const fechaActual = new Date();
  const diferencia = fechaActual.getTime() - fechaEspecifica.getTime();

  const segundos = Math.floor(diferencia / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const meses = Math.floor(dias / 30.3);
  const anos = Math.floor(meses / 12);

  let time1 = document.getElementById('TimeF1')
  time1.textContent = anos
  let time2 = document.getElementById('TimeF2')
  time2.textContent = meses % 12
  let time3 = document.getElementById('TimeF3')
  time3.textContent = dias % 30
  let time4 = document.getElementById('TimeF4')
  time4.textContent = horas % 24
  let time5 = document.getElementById('TimeF5')
  time5.textContent = minutos % 60
  let time6 = document.getElementById('TimeF6')
  time6.textContent = segundos % 60
}

setInterval(samAmistad, 1000);
samAmistad();
function calcularTiempoParaCumpleaños() {
  const fechaHoy = new Date();
  const añoActual = fechaHoy.getFullYear();
  const mesNacimiento = 1; // Marzo es el mes 2, ya que en JavaScript los meses van de 0 a 11
  const diaNacimiento = 22; // Día del mes de nacimiento
  const fechaCumpleañosEsteAño = new Date(añoActual, mesNacimiento, diaNacimiento);
  
  // Si ya pasó el cumpleaños este año, calculamos el próximo año
  if (fechaHoy > fechaCumpleañosEsteAño) {
    fechaCumpleañosEsteAño.setFullYear(añoActual + 1);
  }
  
  const diferencia = fechaCumpleañosEsteAño - fechaHoy;
  const segundos = Math.floor(diferencia / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const meses = Math.floor(dias / 30.4);
  const años = Math.floor(meses / 12);

  let time1 = document.getElementById('TimeN1');
  time1.textContent = años;
  let time2 = document.getElementById('TimeN2');
  time2.textContent = meses % 12;
  let time3 = document.getElementById('TimeN3');
  time3.textContent = dias % 30;
  let time4 = document.getElementById('TimeN4');
  time4.textContent = horas % 24;
  let time5 = document.getElementById('TimeN5');
  time5.textContent = minutos % 60;
  let time6 = document.getElementById('TimeN6');
  time6.textContent = segundos % 60;
}

setInterval(calcularTiempoParaCumpleaños, 1000);
calcularTiempoParaCumpleaños();