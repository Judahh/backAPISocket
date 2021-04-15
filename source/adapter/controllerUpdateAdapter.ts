/* eslint-disable no-unused-vars */
export default interface ControllerUpdateAdapter {
  update(data, socket): Promise<Response>;
  forceUpdate(data, socket): Promise<Response>;
}
