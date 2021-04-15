/* eslint-disable no-unused-vars */
export default interface ControllerShowAdapter {
  show(data, socket): Promise<Response>;
}
