/* eslint-disable @typescript-eslint/ban-ts-comment */
import BaseControllerDefault from './baseControllerDefault';
import ControllerDeleteAdapter from '../adapter/controllerDeleteAdapter';
import { Operation } from 'flexiblepersistence';
// @ts-ignore
export default class BaseControllerDelete
  extends BaseControllerDefault
  implements ControllerDeleteAdapter {
  async delete(data, socket): Promise<Response> {
    return this.generateEvent(
      data,
      socket,
      Operation.delete,
      this.event.bind(this)
    );
  }
}
