/* eslint-disable @typescript-eslint/ban-ts-comment */
import ControllerReadAdapter from '../adapter/controllerReadAdapter';
import { Mixin } from 'ts-mixer';
import BaseControllerShow from './baseControllerShow';
import BaseControllerIndex from './baseControllerIndex';
// @ts-ignore
export default class BaseControllerRead
  extends Mixin(BaseControllerIndex, BaseControllerShow)
  implements ControllerReadAdapter {
  async read(data, socket): Promise<Response> {
    if (Object.keys(data['query']).length !== 0 && data['query'].id)
      return this.index(data, socket);
    return this.show(data, socket);
  }
}
