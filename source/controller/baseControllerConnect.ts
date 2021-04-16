/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import BaseControllerDefault from './baseControllerDefault';
import ControllerConnectAdapter from '../adapter/controllerConnectAdapter';
import { Operation } from 'flexiblepersistence';

// @ts-ignore
export default class BaseControllerConnect
  extends BaseControllerDefault
  implements ControllerConnectAdapter {
  async connect(server, data, socket): Promise<Response> {
    this.server = server;
    return this.generateEvent(
      data,
      socket,
      Operation.other,
      this.event.bind(this)
    );
  }
}
