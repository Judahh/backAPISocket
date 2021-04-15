/* eslint-disable no-unused-vars */
export default interface ControllerReadAdapter {
  read(data, socket): Promise<Response>;
}
