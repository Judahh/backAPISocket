/* eslint-disable no-unused-vars */
export default interface ControllerHeadAdapter {
  head(data, socket): Promise<Response>;
}
