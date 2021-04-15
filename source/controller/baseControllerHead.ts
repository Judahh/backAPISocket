/* eslint-disable @typescript-eslint/ban-ts-comment */
import BaseControllerDefault from './baseControllerDefault';
import { Operation } from 'flexiblepersistence';
import ControllerHeadAdapter from '../adapter/controllerHeadAdapter';

// @ts-ignore
export default class BaseControllerHead
  extends BaseControllerDefault
  implements ControllerHeadAdapter {
  async head(data, socket): Promise<Response> {
    return this.generateEvent(
      data,
      socket,
      Operation.other,
      this.event.bind(this)
    );
  }
}
