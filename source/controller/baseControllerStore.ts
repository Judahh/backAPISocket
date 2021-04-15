/* eslint-disable @typescript-eslint/ban-ts-comment */
import BaseControllerDefault from './baseControllerDefault';
import ControllerStoreAdapter from '../adapter/controllerStoreAdapter';
import { Operation } from 'flexiblepersistence';

// @ts-ignore
export default class BaseControllerStore
  extends BaseControllerDefault
  implements ControllerStoreAdapter {
  // @ts-ignore
  async store(data, socket): Promise<Response> {
    return this.generateEvent(
      data,
      socket,
      Operation.create,
      this.event.bind(this),
      true
    );
  }
}
