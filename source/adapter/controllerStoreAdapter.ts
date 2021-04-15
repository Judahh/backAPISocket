/* eslint-disable no-unused-vars */
export default interface ControllerStoreAdapter {
  store(data, socket): Promise<Response>;
}
