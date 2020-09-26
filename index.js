window.addEventListener("DOMContentLoaded", (event) => {
  let container = document.createElement("div");
  container.className = "container";

  document.body.appendChild(container);

  function createDiv(num) {
    const element = document.createElement("div");
    element.className = `bar bar-${num}`;
    container.appendChild(element);
  }

  const bar = [4, 1, 3, 2, 5, 7, 6, 8, 9];
  var num = bar.sort(() => 0.5 - Math.random());
  var i = 0,
    j = 0,
    n = num.length;

  for (let i = 0; i < bar.length; i++) {
    createDiv(num[i]);
  }

  function asyncSort() {
    if (i < n - 1) {
      if (j < n - i - 1) {
        delay(i, j);
        j++;
      } else {
        delay(i, j);
        i++;
        j = 0;
      }

      console.log(i, j);
    }
  }

  function delay(i, j) {
    setTimeout(() => {
      if (num[j] > num[j + 1]) {
        const container = document.getElementsByClassName("container")[0];
        const a = container.childNodes[j];
        b = container.childNodes[j + 1];

        container.insertBefore(b, a);

        let temp = num[j];
        num[j] = num[j + 1];
        num[j + 1] = temp;
      }
      asyncSort();
    }, 100);
  }

  const button = document.createElement("button");
  button.innerHTML = "Bubble Sort";
  button.className = "btn";
  document.body.appendChild(button);

  button.addEventListener("click", () => {
    asyncSort();

    console.log(num);
  });
});
