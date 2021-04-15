/* eslint-disable no-unused-vars */
export default interface ControllerOptionsAdapter {
  options(data, socket): Promise<Response>;
}
