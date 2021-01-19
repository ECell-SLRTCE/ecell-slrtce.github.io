window.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector(".contact__form");
  const success = () => {
    form.reset();
    alert("Your response has been recorded successfully");
  };
  form.addEventListener("submit", event => {
    event.preventDefault();
    let data = new FormData(form);
    ajax(form.method, form.action, data, success);
  });
});

function ajax (method, url, data, success) {
  let reqHeaders = new Headers();
  reqHeaders.append("Accept", "application/json");
  let initObject = {
    method,
    headers: reqHeaders,
    body: data,
  };
  fetch(url, initObject)
    .then(success())
    .catch(err => console.log(err));
};
