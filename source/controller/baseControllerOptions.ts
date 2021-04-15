/* eslint-disable @typescript-eslint/ban-ts-comment */
import BaseControllerDefault from './baseControllerDefault';
import { Operation } from 'flexiblepersistence';
import ControllerOptionsAdapter from '../adapter/controllerOptionsAdapter';

// @ts-ignore
export default class BaseControllerOptions
  extends BaseControllerDefault
  implements ControllerOptionsAdapter {
  async options(data, socket): Promise<Response> {
    return this.generateEvent(
      data,
      socket,
      Operation.other,
      this.event.bind(this)
    );
  }
}
