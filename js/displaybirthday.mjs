const findBirthday = ({ month, day }) => {
  fetch('/birthdays.json')
    .then(response => response.json())
    .then(data => {
      let n = data.length;
      while (n > 0) {
        //input.value.split('-')[1] + input.value.split('-')[2]
        console.log(month.toString() + day.toString());
        if (month.toString() + day.toString() === data[n - 1].day) {
          Toastify({
            text: `π ${data[n - 1].name}λμ΄ μμΌμΈ λ μ΄μμ! π`,
            duration: 2000,
            close: true,
            gravity: "bottom",
            position: "center",
            stopOnFocus: false,
            style: {
              background: "wheat",
            },
            onClick: function () {
              Toastify({
                text: `π μΆμΉ΄μΆμΉ΄ π`,
                duration: 2000,
                close: true,
                gravity: "bottom",
                position: "center",
                stopOnFocus: false,
                style: {
                  background: "wheat",
                },
              }).showToast();
            } // Callback after click
          }).showToast();
        }
        n--;
      }
    })
    .catch(error => console.log(error));
}
export default findBirthday;