// --------------------------------------------------------------------- Calcular horas
const elInputHorasInicio = document.getElementById('horas_inicio');
const elInputHorasFim = document.getElementById('horas_fim');
const btnCalcularHoras = document.getElementById("btn_calcular_horas");
const elResultadoHoras = document.getElementById("resultado_horas_calculadas");

// --------------------------------------------------------------------- evento focus inicio
elInputHorasInicio.addEventListener('keypress', (ev)=> {
	if(ev.key === "Enter") {
		elInputHorasFim.focus();
	}
});

// --------------------------------------------------------------------- evento focus fim
elInputHorasFim.addEventListener('keypress', (ev)=> {
	if(ev.key === "Enter") {
		btnCalcularHoras.focus();
		btnCalcularHoras.click();
	}
});

// --------------------------------------------------------------------- funcao do btn calcular horas
btnCalcularHoras.addEventListener("click", ()=> {
	const valHorasInicio = elInputHorasInicio.value;
	const valHorasFim = elInputHorasFim.value;
	
	const dataInicio = new Date('1970-01-01T' + valHorasInicio + 'Z');
	const dataFim = new Date('1970-01-01T' + valHorasFim + 'Z');
	
	if(dataFim < dataInicio) {
		alert("Hora_Fim não pode ser menor que Hora_Início");
		return;
	}
	
	const diferencaEmMilissegundos = dataFim - dataInicio;
	
	let horas = Math.floor(diferencaEmMilissegundos / 3600000);
	let minutos = Math.floor((diferencaEmMilissegundos % 3600000) / 60000);
	
	const totalMinutos = (horas*60) + minutos;
	
	if(horas < 10) horas = `0${horas}`;
	if(minutos < 10) minutos = `0${minutos}`;
	
	let msgResultado = `Total Horas:\t\t${horas}:${minutos}h\n`;
	msgResultado += `Total Minutos:\t\t${totalMinutos}min\n`;
	
	let fracao = totalMinutos/60;
	fracao = fracao.toFixed(2);
	fracao = fracao.replace('.', ',');
	
	msgResultado += `Total Fração:\t\t${fracao}h`;
	
	elResultadoHoras.textContent = msgResultado;
});

// --------------------------------------------------------------------- Calcular fração
const elInputHorasFracao = document.getElementById('horas_fracao');
const btnCalcularFracao = document.getElementById("btn_calcular_fracao");
const elResultadoFracao = document.getElementById('resultado_fracoes_calculadas');

// --------------------------------------------------------------------- event focus input fracao
elInputHorasFracao.addEventListener('keypress', (ev)=> {
	if(ev.key === "Enter") {
		btnCalcularFracao.focus();
		btnCalcularFracao.click();
	}
});

// --------------------------------------------------------------------- funcao btn calcular fraçao
btnCalcularFracao.addEventListener('click', ()=> {
	let valFracao = elInputHorasFracao.value;
	
	valFracao = valFracao ? valFracao : 0;
	
	let horas = Math.floor(valFracao);
	let minutos = Math.round((valFracao - horas) * 100);
	minutos = Math.floor((60/100) * minutos);				// regra de 3
	
	const totalMinutos = (horas * 60) + minutos;
	
	if(horas < 10) horas = `0${horas}`;
	if(minutos < 10) minutos = `0${minutos}`;
	
	valFracao = parseFloat(valFracao);
	valFracao = valFracao.toFixed(2);
	valFracao = valFracao.replace('.', ',');
	
	let msgResultado = `Total Horas:\t\t${horas}:${minutos}h\n`;
	msgResultado += `Total Minutos:\t\t${totalMinutos}min\n`;
	msgResultado += `Total Fração:\t\t${valFracao}h`;
	
	elResultadoFracao.textContent = msgResultado;
});

// --------------------------------------------------------------------- Calcular minutos
const elInputMinutos = document.getElementById('in_minutos');
const btnCalcularMinutos = document.getElementById('btn_calcular_minutos');
const elResultadoMinutos = document.getElementById('resultado_minutos');

// --------------------------------------------------------------------- evento focus in minutos
elInputMinutos.addEventListener('keypress', (ev)=> {
	if(ev.key === "Enter") {
		btnCalcularMinutos.focus();
		btnCalcularMinutos.click();
	}
});

// --------------------------------------------------------------------- funcao btn calcular minutos
btnCalcularMinutos.addEventListener('click', ()=> {
	const valMinutos = elInputMinutos.value;
	
	let fracao = valMinutos/60;
	let horas = Math.floor(fracao);
	let minutos = valMinutos - horas*60;
	
	if(horas < 10) horas = `0${horas}`;
	if(minutos < 10) minutos = `0${minutos}`;
	
	fracao = fracao.toFixed(2);
	fracao = fracao.replace('.', ',');
	
	let msgResultado = `Total Horas:\t\t${horas}:${minutos}h\n`;
	msgResultado += `Total Minutos:\t\t${valMinutos ? valMinutos : 0}min\n`;
	msgResultado += `Total Fração:\t\t${fracao}h`;
	
	elResultadoMinutos.textContent = msgResultado;
});

// --------------------------------------------------------------------- Calcular regra de 3
const elInputRegraA = document.getElementById('in_regra_a');
const elInputRegraB = document.getElementById('in_regra_b');
const elInputRegraC = document.getElementById('in_regra_c');
const elInputRegraX = document.getElementById('in_regra_x');
const btnCalcularRegra = document.getElementById('btn_calcular_regra_tres');

// --------------------------------------------------------------------- evento focus in A
elInputRegraA.addEventListener('keypress', (ev)=> {
	if(ev.key === "Enter") {
		elInputRegraB.focus();
	}
});

elInputRegraB.addEventListener('keypress', (ev)=> {
	if(ev.key === "Enter") {
		elInputRegraC.focus();
	}
});

elInputRegraC.addEventListener('keypress', (ev)=> {
	if(ev.key === "Enter") {
		btnCalcularRegra.focus();
		btnCalcularRegra.click();
	}
});

// --------------------------------------------------------------------- funcao btn calcular regra de 3
btnCalcularRegra.addEventListener('click', ()=> {
	const valA = elInputRegraA.value;
	const valB = elInputRegraB.value;
	const valC = elInputRegraC.value;
	
	if(!valA) {
		alert("Preencha o campo A");
		elInputRegraA.focus();
		return;
	}
	if(!valB) {
		alert("Preencha o campo B");
		elInputRegraB.focus();
		return;
	}
	if(!valC) {
		alert("Preencha o campo C");
		elInputRegraC.focus();
		return;
	}
	
	const resultado = (valB*valC)/valA;
	elInputRegraX.value = resultado;
});

// --------------------------------------------------------------------- ContentLoaded
document.addEventListener('DOMContentLoaded', ()=> {
	btnCalcularHoras.click();
	btnCalcularFracao.click();
	btnCalcularMinutos.click();
});