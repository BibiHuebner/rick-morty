import React from "react";
import Modal from "react-bootstrap/Modal"; //Fehler weil schon selbst definiert
import Button from "react-bootstrap/Button";
{
  /* <div class="container">
  <h2>Modal Example</h2>
  {/* <!-- Trigger the modal with a button --> */
}
//   <button
//     type="button"
//     class="btn btn-info btn-lg"
//     data-toggle="modal"
//     data-target="#myModal"
//   >
//     Open Modal
//   </button>

//   {/* <!-- Modal --> */}
//   <div class="modal fade" id="myModal" role="dialog">
//     <div class="modal-dialog">
//       {/* <!-- Modal content--> */}
//       <div class="modal-content">
//         <div class="modal-header">
//           <button type="button" class="close" data-dismiss="modal">
//             &times;
//           </button>
//           <h4 class="modal-title">Modal Header</h4>
//         </div>
//         <div class="modal-body">
//           <p>Some text in the modal.</p>
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-default" data-dismiss="modal">
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>; */}

/*const backgroundStyle = {
  //backgroundColor: "rgba(200,200,200)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  top: 30,
  left: 30,
  width: "50%",
  height: "50%",
  zIndex: 10,
  paddingTop: 100,
  borderRadius: 30,
};*/
/*const cardStyle = {
  backgroundColor: "white",
  //padding: "100rem",
  //margin: auto,
  //padding: 20,
  //border: 1 solid "green",
  //width: 80,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};*/

function MyModal({ onClose, character }) {
  return (
    <div
      className="box"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="flip-card"
    >
      <div id="contained-modal-title-vcenter">{character.name} </div>
      <div> species: {character.species}</div>
      <div>status: {character.status}</div>

      <button variant="primary" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default MyModal;
