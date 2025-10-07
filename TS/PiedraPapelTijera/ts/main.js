// Cambiar a .ts
// document.addEventListener('DOMContentLoaded', onLoad)

// function onLoad(): void {

//     const piedraBtn: HTMLElement | null = document.getElementById('piedra');
//     const papelBtn: HTMLElement | null = document.getElementById('papel');
//     const tijeraBtn: HTMLElement | null = document.getElementById('tijera');

//     if (piedraBtn && papelBtn && tijeraBtn) {

//         const manos: HTMLElement[] = [piedraBtn, papelBtn, tijeraBtn];

//         manos.forEach(element => {
//             element.addEventListener('click', () => {

//                 let manoJugada: string | null = (element.getAttribute('id'));

//                 playHand(manoJugada);

//             })
//         });

//     }

// }

// function playHand(manoJugada: string | null): void {

//     enum manosAleatorias {
//         'piedra',
//         'papel',
//         'tijera',
//     }

//     let randomNumber: number = (Math.floor(Math.random() * (3)));

//     let mensajeFinal: string;

//     if (manoJugada == manosAleatorias[randomNumber]) {
//         mensajeFinal = "¡Has empatado!";
//     }
//     else if ((manoJugada == 'piedra' && manosAleatorias[randomNumber] == 'tijera') || (manoJugada == 'tijera' && manosAleatorias[randomNumber] == 'papel') || (manoJugada == 'papel' && manosAleatorias[randomNumber] == 'piedra')) {
//         mensajeFinal = '¡Has ganado!';
//     }
//     else {
//         mensajeFinal = '¡Has perdido!';
//     }

//     const mensajeFinalContainer: HTMLElement | null = document.getElementById('mensaje-final');
//     const batallaContainer: HTMLElement | null = document.getElementById('batalla');

//     if (mensajeFinalContainer && batallaContainer) {

//         mensajeFinalContainer.textContent = mensajeFinal;

//         batallaContainer.textContent = manoJugada + ' vs ' + manosAleatorias[randomNumber];

//     }
// }
