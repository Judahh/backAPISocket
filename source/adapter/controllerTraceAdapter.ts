/* eslint-disable no-unused-vars */
export default interface ControllerTraceAdapter {
  trace(data, socket): Promise<Response>;
}
