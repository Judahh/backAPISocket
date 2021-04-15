/* eslint-disable @typescript-eslint/ban-ts-comment */
import BaseControllerDefault from './baseControllerDefault';
import { Operation } from 'flexiblepersistence';
import ControllerTraceAdapter from '../adapter/controllerTraceAdapter';

// @ts-ignore
export default class BaseControllerTrace
  extends BaseControllerDefault
  implements ControllerTraceAdapter {
  async trace(data, socket): Promise<Response> {
    return this.generateEvent(
      data,
      socket,
      Operation.other,
      this.event.bind(this)
    );
  }
}
