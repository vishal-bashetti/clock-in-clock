// let hh = 15 * 60;
// let mm = 30 * 6;

// hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
// mn.style.transform = `rotateZ(${mm}deg)`;

const numbers = [
  //0
  [
    { hour: 3, minute: 30 },
    { hour: 3, minute: 45 },
    { hour: 3, minute: 45 },
    { hour: 9, minute: 30 },

    { hour: 6, minute: 00 },
    { hour: 3, minute: 30 },
    { hour: 9, minute: 30 },
    { hour: 6, minute: 00 },

    { hour: 6, minute: 00 },
    { hour: 6, minute: 00 },
    { hour: 6, minute: 00 },
    { hour: 6, minute: 00 },

    { hour: 6, minute: 00 },
    { hour: 6, minute: 00 },
    { hour: 6, minute: 00 },
    { hour: 6, minute: 00 },

    { hour: 6, minute: 00 },
    { hour: 3, minute: 00 },
    { hour: 9, minute: 00 },
    { hour: 6, minute: 00 },

    { hour: 3, minute: 00 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 00 },
  ],

  // 1
  [
    { hour: 3, minute: 30 },
    { hour: 3, minute: 45 },
    { hour: 6, minute: 45 },
    { hour: 7.5, minute: 31.5 },

    { hour: 3, minute: 0 },
    { hour: 9, minute: 30 },
    { hour: 6, minute: 0 },
    { hour: 7.5, minute: 31.5 },

    { hour: 7.5, minute: 31.5 },
    { hour: 6, minute: 00 },
    { hour: 6, minute: 00 },
    { hour: 7.5, minute: 31.5 },

    { hour: 7.5, minute: 31.5 },
    { hour: 6, minute: 00 },
    { hour: 6, minute: 00 },
    { hour: 7.5, minute: 31.5 },

    { hour: 6, minute: 15 },
    { hour: 9, minute: 00 },
    { hour: 3, minute: 00 },
    { hour: 6, minute: 45 },

    { hour: 3, minute: 00 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 00 },
  ],
  // 2
  [
    { hour: 3, minute: 30 },
    { hour: 3, minute: 45 },
    { hour: 3, minute: 45 },
    { hour: 9, minute: 30 },

    { hour: 3, minute: 0 },
    { hour: 3, minute: 45 },
    { hour: 9, minute: 30 },
    { hour: 6, minute: 00 },

    { hour: 3, minute: 30 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 00 },
    { hour: 6, minute: 00 },

    { hour: 6, minute: 00 },
    { hour: 6, minute: 15 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 00 },

    { hour: 6, minute: 00 },
    { hour: 3, minute: 00 },
    { hour: 3, minute: 45 },
    { hour: 6, minute: 45 },

    { hour: 3, minute: 00 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 00 },
  ],
  // 3
  [
    { hour: 3, minute: 30 },
    { hour: 3, minute: 45 },
    { hour: 3, minute: 45 },
    { hour: 9, minute: 30 },

    { hour: 3, minute: 0 },
    { hour: 3, minute: 45 },
    { hour: 9, minute: 30 },
    { hour: 6, minute: 00 },

    { hour: 3, minute: 30 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 00 },
    { hour: 6, minute: 00 },

    { hour: 3, minute: 00 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 30 },
    { hour: 6, minute: 00 },

    { hour: 6, minute: 15 },
    { hour: 3, minute: 45 },
    { hour: 9, minute: 00 },
    { hour: 6, minute: 00 },

    { hour: 3, minute: 00 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 00 },
  ],
  //4
  [
    { hour: 3, minute: 30 },
    { hour: 6, minute: 45 },
    { hour: 3, minute: 30 },
    { hour: 9, minute: 30 },

    { hour: 6, minute: 00 },
    { hour: 12, minute: 30 },
    { hour: 12, minute: 30 },
    { hour: 6, minute: 00 },

    { hour: 6, minute: 00 },
    { hour: 12, minute: 15 },
    { hour: 9, minute: 00 },
    { hour: 6, minute: 00 },

    { hour: 3, minute: 00 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 30 },
    { hour: 6, minute: 00 },

    { hour: 7.5, minute: 31.5 },
    { hour: 7.5, minute: 31.5 },
    { hour: 6, minute: 00 },
    { hour: 6, minute: 00 },

    { hour: 7.5, minute: 31.5 },
    { hour: 7.5, minute: 31.5 },
    { hour: 12, minute: 15 },
    { hour: 9, minute: 00 },
  ],
  // 5
  [
    { hour: 3, minute: 30 },
    { hour: 3, minute: 45 },
    { hour: 3, minute: 45 },
    { hour: 9, minute: 30 },

    { hour: 6, minute: 0 },
    { hour: 3, minute: 30 },
    { hour: 9, minute: 15 },
    { hour: 0, minute: 45 },

    { hour: 6, minute: 0 },
    { hour: 0, minute: 15 },
    { hour: 9, minute: 15 },
    { hour: 6, minute: 45 },

    { hour: 3, minute: 00 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 30 },
    { hour: 6, minute: 00 },

    { hour: 6, minute: 15 },
    { hour: 3, minute: 45 },
    { hour: 0, minute: 45 },
    { hour: 6, minute: 00 },

    { hour: 3, minute: 00 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 00 },
  ],
  // 6
  [
    { hour: 3, minute: 30 },
    { hour: 3, minute: 45 },
    { hour: 3, minute: 45 },
    { hour: 9, minute: 30 },

    { hour: 6, minute: 0 },
    { hour: 3, minute: 30 },
    { hour: 9, minute: 15 },
    { hour: 0, minute: 45 },

    { hour: 6, minute: 0 },
    { hour: 0, minute: 15 },
    { hour: 9, minute: 15 },
    { hour: 6, minute: 45 },

    { hour: 6, minute: 00 },
    { hour: 6, minute: 15 },
    { hour: 9, minute: 30 },
    { hour: 6, minute: 00 },

    { hour: 6, minute: 00 },
    { hour: 3, minute: 00 },
    { hour: 0, minute: 45 },
    { hour: 6, minute: 00 },

    { hour: 3, minute: 00 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 00 },
  ],
  //7
  [
    { hour: 3, minute: 30 },
    { hour: 3, minute: 45 },
    { hour: 3, minute: 45 },
    { hour: 9, minute: 30 },

    { hour: 3, minute: 00 },
    { hour: 3, minute: 45 },
    { hour: 9, minute: 30 },
    { hour: 6, minute: 00 },

    { hour: 7.5, minute: 31.5 },
    { hour: 7.5, minute: 31.5 },
    { hour: 6, minute: 00 },
    { hour: 6, minute: 00 },

    { hour: 7.5, minute: 31.5 },
    { hour: 7.5, minute: 31.5 },
    { hour: 6, minute: 00 },
    { hour: 6, minute: 00 },

    { hour: 7.5, minute: 31.5 },
    { hour: 7.5, minute: 31.5 },
    { hour: 6, minute: 00 },
    { hour: 6, minute: 00 },

    { hour: 7.5, minute: 31.5 },
    { hour: 7.5, minute: 31.5 },
    { hour: 12, minute: 15 },
    { hour: 9, minute: 00 },
  ],
  // 8
  [
    { hour: 3, minute: 30 },
    { hour: 3, minute: 45 },
    { hour: 3, minute: 45 },
    { hour: 9, minute: 30 },

    { hour: 6, minute: 0 },
    { hour: 3, minute: 30 },
    { hour: 9, minute: 30 },
    { hour: 0, minute: 30 },

    { hour: 5, minute: 0 },
    { hour: 0, minute: 15 },
    { hour: 9, minute: 00 },
    { hour: 7, minute: 00 },

    { hour: 1, minute: 30 },
    { hour: 6, minute: 15 },
    { hour: 9, minute: 30 },
    { hour: 11, minute: 30 },

    { hour: 6, minute: 00 },
    { hour: 3, minute: 00 },
    { hour: 0, minute: 45 },
    { hour: 6, minute: 00 },

    { hour: 3, minute: 00 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 00 },
  ],
  //9
  [
    { hour: 3, minute: 30 },
    { hour: 3, minute: 45 },
    { hour: 3, minute: 45 },
    { hour: 9, minute: 30 },

    { hour: 6, minute: 00 },
    { hour: 3, minute: 30 },
    { hour: 9, minute: 30 },
    { hour: 6, minute: 00 },

    { hour: 6, minute: 00 },
    { hour: 12, minute: 15 },
    { hour: 9, minute: 00 },
    { hour: 6, minute: 00 },

    { hour: 3, minute: 00 },
    { hour: 9, minute: 15 },
    { hour: 9, minute: 30 },
    { hour: 6, minute: 00 },

    { hour: 7.5, minute: 31.5 },
    { hour: 7.5, minute: 31.5 },
    { hour: 6, minute: 00 },
    { hour: 6, minute: 00 },

    { hour: 7.5, minute: 31.5 },
    { hour: 7.5, minute: 31.5 },
    { hour: 12, minute: 15 },
    { hour: 9, minute: 00 },
  ],
];

// hr.style.transform = `rotateZ(${hh * 5 + 360}deg)`;
// mn.style.transform = `rotateZ(${mm + 360 * 2}deg)`;

let count = 0;

function time() {
  let clkHR = document.getElementsByClassName("hr");
  let arrayClkHr = Array.from(clkHR);
  for (let i = 0; i < arrayClkHr.length; i++) {
    let hh = numbers[count][i].hour * 6;
    arrayClkHr[i].style.transform = `rotateZ(${hh * 5 + 360}deg)`;
  }

  let clkMN = document.getElementsByClassName("mn");
  let arrayClkMn = Array.from(clkMN);

  for (let i = 0; i < arrayClkMn.length; i++) {
    let mm = numbers[count][i].minute * 6;
    arrayClkMn[i].style.transform = `rotateZ(${mm * 5 + 360}deg)`;
  }
  count++;
  if (count > 9) {
    stop();
  }
}
let id = 0;
function start() {
  id = window.setInterval(time, 5000);
}
start();

function stop() {
  window.clearInterval(id);
  console.log("stoped");
}
