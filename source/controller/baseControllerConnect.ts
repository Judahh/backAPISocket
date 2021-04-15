/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import BaseControllerDefault from './baseControllerDefault';
import ControllerConnectAdapter from '../adapter/controllerConnectAdapter';

// @ts-ignore
export default class BaseControllerConnect
  extends BaseControllerDefault
  implements ControllerConnectAdapter {
  async connect(_data, socket): Promise<any> {
    this.socket = socket;
    return socket;
  }
}
