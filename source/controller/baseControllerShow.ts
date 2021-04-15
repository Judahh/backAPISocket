/* eslint-disable @typescript-eslint/ban-ts-comment */
import ControllerShowAdapter from '../adapter/controllerShowAdapter';
import BaseControllerDefault from './baseControllerDefault';
import { Operation } from 'flexiblepersistence';

// @ts-ignore
export default class BaseControllerShow
  extends BaseControllerDefault
  implements ControllerShowAdapter {
  async show(data, socket): Promise<Response> {
    return this.generateEvent(
      data,
      socket,
      Operation.read,
      this.event.bind(this),
      false
    );
  }
}
