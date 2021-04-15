/* eslint-disable no-unused-vars */
export default interface ControllerConnectAdapter {
  connect(data, socket): Promise<Response>;
}
