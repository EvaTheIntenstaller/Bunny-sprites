export default class InputHandler {
  constructor(Bunny) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          Bunny.moveleft();
          break;
        default:
        //Nothing
      }
    });
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
          Bunny.stop();
          break;
        default:
        //Nothing
      }
    });
  }
}
