"use strict";
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    console.log(data);
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === 'iniciante') {
            color = 'blue;';
        }
        else if (curso.nivel === 'avancado') {
            color = "red";
        }
        document.body.innerHTML += `
      <div>
        <h2 style="color:${color};">${curso.nome}</h2>
        <h2>Horas: ${curso.horas} horas</h2>
        <h2>Quantidade Aulas: ${curso.aulas}</h2>
        <h2>Tipo plano: ${curso.gratuito ? 'Gatuito' : 'Pago'}</h2>
        <p>Tags: ${curso.tags.join(', ')}</p>
        <p>Aulas: ${curso.idAulas.join(' | ')}</p>
      </div>
    `;
    });
}
