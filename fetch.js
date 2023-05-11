const resp = fetch("https://reqres.in/api/users?page=1");
resp
  .then((response) => response.json())
  .then((json) => {
    let content = document.getElementById("container");
    let htmlx = "";
    json.data.forEach((element) => {

      let card = `
      <div class="card" style="width: 18rem;">
      <img class="card-img-top"style="padding-top:10px;"> 
      <svg height="150px" width="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60.671 60.671" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <ellipse style="fill:#010002;" cx="30.336" cy="12.097" rx="11.997" ry="12.097"></ellipse> <path style="fill:#010002;" d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9 C48.354,35.818,42.661,30.079,35.64,30.079z"></path> </g> </g> </g></svg></img>
  <div class="card-body">

    <h1 style="color:gray;text-weight:bolder;font-size:34px;">${element.id}</h1>
          <div">
          <p style="padding-top:10px;">${element.first_name} ${element.last_name}</p>
            <p >${element.email}</p>
           
            <a   style="margin-top:10px;" onClick="searchUser(${element.id})" href="#" data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="btn btn-primary">Detalles</a>
  </div>
</div>
      `;
      htmlx = htmlx + card;
    });
    content.innerHTML = htmlx;
  });

const searchUser = (id) => {
  const modal = new bootstrap.Modal("#modal", {});
  fetch(`https://reqres.in/api/users/${id}`)
    .then((res) => res.json())
    .then(({ data }) => {
      document.getElementById(
        "modal-body"
      ).innerHTML = `<img class='mx-auto'src='${data.avatar}' alt='...'>
          <div class='mt-3 text-center'>
          <p>${data.first_name} ${data.last_name}</p>
          <p>${data.email}</p>
          </div>`;
    });

  modal.show();
};
