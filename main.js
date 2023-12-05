// --------------------------------------------------------------------- getResultado
function getResultado(hh, mm) {
	const totalMinutos = (hh*60) + mm;
	
	let horaDecimal = totalMinutos/60;
	horaDecimal = horaDecimal.toFixed(2);
	
	if(hh < 10) hh = `0${hh}`;
	if(mm < 10) mm = `0${mm}`;
	
	let msg = `Total Horas:\t\t${hh}:${mm}h\n`;
	msg += `Total Minutos:\t\t${totalMinutos}min\n`;
	msg += `Total Fração:\t\t${horaDecimal.replace('.', ',')}h`;
	
	return msg;
}

// --------------------------------------------------------------------- Calcular horas
const elInHorasInicio = document.getElementById('in_horas_inicio');
const elInHorasFim = document.getElementById('in_horas_fim');
const elResultHoras = document.getElementById("result_diferenca_horas");
const btnCalcHoras = document.getElementById("btn_calc_diferenca_horas");

// --------------------------------------------------------------------- evento focus inicio
elInHorasInicio.addEventListener('keypress', (ev)=> {
	if(ev.key === "Enter") {
		elInHorasFim.focus();
	}
});

// --------------------------------------------------------------------- evento focus fim
elInHorasFim.addEventListener('keypress', (ev)=> {
	if(ev.key === "Enter") {
		btnCalcHoras.focus();
		btnCalcHoras.click();
	}
});

// --------------------------------------------------------------------- funcao do btn calcular horas
btnCalcHoras.addEventListener("click", ()=> {
	const valHorasInicio = elInHorasInicio.value;
	const valHorasFim = elInHorasFim.value;
	
	const dataInicio = new Date('1970-01-01T' + valHorasInicio + 'Z');
	const dataFim = new Date('1970-01-01T' + valHorasFim + 'Z');
	
	if(dataFim < dataInicio) {
		alert("Hora_Fim não pode ser menor que Hora_Início");
		return;
	}
	
	const diferencaEmMilissegundos = dataFim - dataInicio;
	
	const horas = Math.floor(diferencaEmMilissegundos / 3600000);
	const minutos = Math.floor((diferencaEmMilissegundos % 3600000) / 60000);
	
	elResultHoras.textContent = getResultado(horas, minutos);
});


// --------------------------------------------------------------------- Calcular decimal
const elInHorasDecimal = document.getElementById('in_horas_decimal');
const btnCalcDecimal = document.getElementById("btn_calc_decimal");
const elResultDecimal = document.getElementById('result_horas_decimal');

// --------------------------------------------------------------------- event focus input decimal
elInHorasDecimal.addEventListener('keypress', (ev)=> {
	if(ev.key === "Enter") {
		btnCalcDecimal.focus();
		btnCalcDecimal.click();
	}
});

// --------------------------------------------------------------------- funcao btn calcular decimal
btnCalcDecimal.addEventListener('click', ()=> {
	let valDecimal = elInHorasDecimal.value;
	
	const horas = Math.floor(valDecimal);
	let minutos = Math.round((valDecimal - horas)*100);
	minutos = Math.floor((60/100) * minutos);				// regra de 3
	
	elResultDecimal.textContent = getResultado(horas, minutos);
});


// --------------------------------------------------------------------- Calcular minutos
const elInMinutos = document.getElementById('in_minutos');
const btnCalcMinutos = document.getElementById('btn_calc_minutos');
const elResultMinutos = document.getElementById('result_minutos');

// --------------------------------------------------------------------- evento focus in minutos
elInMinutos.addEventListener('keypress', (ev)=> {
	if(ev.key === "Enter") {
		btnCalcMinutos.focus();
		btnCalcMinutos.click();
	}
});

// --------------------------------------------------------------------- funcao btn calcular minutos
btnCalcMinutos.addEventListener('click', ()=> {
	const totalMinutos = elInMinutos.value;
	
	const horas = Math.floor(totalMinutos/60);
	const minutos = totalMinutos - (horas*60);
	
	elResultMinutos.textContent = getResultado(horas, minutos);
});

// --------------------------------------------------------------------- Calcular valor para horas
const elInValorHoras = document.getElementById('in_valor_hora');
const elInValorAConverter = document.getElementById('in_valor_converter');
const elResultValorHora = document.getElementById('result_valor_hora');
const btnCalcValorHora = document.getElementById('btn_calc_valor_hora');

// --------------------------------------------------------------------- evento valor hora
elInValorHoras.addEventListener('keypress', (ev)=> {
	if(ev.key === "Enter") {
		elInValorAConverter.focus();
	}
});

// --------------------------------------------------------------------- evento valor converter
elInValorAConverter.addEventListener('keypress', (ev)=> {
	if(ev.key === "Enter") {
		btnCalcValorHora.focus();
		btnCalcValorHora.click();
	}
});

// --------------------------------------------------------------------- funcão do btn calcular valor hora
btnCalcValorHora.addEventListener('click', ()=> {
	let valorHora = elInValorHoras.value;
	let valorAConverter = elInValorAConverter.value;
	
	if(!valorHora) valorHora = 0;
	if(!valorAConverter) valorAConverter = 0;
	
	valorHora = parseFloat(valorHora).toFixed(2);
	valorAConverter = parseFloat(valorAConverter).toFixed(2);
	
	let horaDecimal = 0;
	
	if(valorHora != 0) {
		horaDecimal = valorAConverter/valorHora;
	}
	
	const horas = Math.floor(horaDecimal);
	let minutos = Math.round((horaDecimal - horas)*100);
	minutos = Math.floor((60/100) * minutos);				// regra de 3
	
	elResultValorHora.textContent = getResultado(horas, minutos);
});

// --------------------------------------------------------------------- ContentLoaded
document.addEventListener('DOMContentLoaded', ()=> {
	btnCalcHoras.click();
	btnCalcDecimal.click();
	btnCalcMinutos.click();
	btnCalcValorHora.click();
});