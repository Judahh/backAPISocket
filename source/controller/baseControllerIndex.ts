/* eslint-disable @typescript-eslint/ban-ts-comment */
import ControllerIndexAdapter from '../adapter/controllerIndexAdapter';
import BaseControllerDefault from './baseControllerDefault';
import { Operation } from 'flexiblepersistence';
// @ts-ignore
export default class BaseControllerIndex
  extends BaseControllerDefault
  implements ControllerIndexAdapter {
  async index(data, socket): Promise<Response> {
    return this.generateEvent(
      data,
      socket,
      Operation.read,
      this.event.bind(this),
      true
    );
  }
}
