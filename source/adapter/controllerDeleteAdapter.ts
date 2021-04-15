/* eslint-disable no-unused-vars */
export default interface ControllerDeleteAdapter {
  delete(data, socket): Promise<Response>;
}
