import jwt from "jsonwebtoken";
import Swal from "sweetalert2";
import Router from "next/router";

let user_authentication = (token, redirect) => {
  jwt.verify(token, process.env.NEXT_PUBLIC_keyjwt, (err, decode) => {
    if (!err) {
      return true;
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid token.",
        text: "You don't have enough permissions!",
        showConfirmButton: false,
        timer: 3000,
        backdrop: `
        rgb(255, 255, 255)
          left top
          no-repeat
        `,
      }).then(
        Router.push(`/${redirect}`),
        console.error(`You don't have enough permissions. Error: ${err}`)
      );
    }
  });
};

module.exports = {
  user_authentication,
};
