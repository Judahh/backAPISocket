/* eslint-disable no-unused-vars */
export default interface ControllerIndexAdapter {
  index(data, socket): Promise<Response>;
}
