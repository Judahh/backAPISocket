/* eslint-disable no-unused-vars */
export default interface ControllerConnectAdapter {
  connect(server, data, socket): Promise<Response>;
}
