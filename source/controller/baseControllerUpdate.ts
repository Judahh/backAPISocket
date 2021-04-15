/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import BaseControllerDefault from './baseControllerDefault';
import ControllerUpdateAdapter from '../adapter/controllerUpdateAdapter';
import { Operation } from 'flexiblepersistence';

// @ts-ignore
export default class BaseControllerUpdate
  extends BaseControllerDefault
  implements ControllerUpdateAdapter {
  async update(data, socket): Promise<Response> {
    return this.generateEvent(
      data,
      socket,
      Operation.update,
      this.event.bind(this)
    );
  }
  async forceUpdate(data, socket): Promise<Response> {
    return this.generateEvent(
      data,
      socket,
      Operation.update,
      this.event.bind(this)
    );
  }
}
