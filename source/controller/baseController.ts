/* eslint-disable @typescript-eslint/ban-ts-comment */
import ControllerAdapter from '../adapter/controllerAdapter';
import { Mixin } from 'ts-mixer';
import BaseControllerDelete from './baseControllerDelete';
import BaseControllerStore from './baseControllerStore';
import BaseControllerUpdate from './baseControllerUpdate';
import BaseControllerRead from './baseControllerRead';
import BaseControllerConnect from './baseControllerConnect';
import BaseControllerHead from './baseControllerHead';
import BaseControllerOptions from './baseControllerOptions';
import BaseControllerTrace from './baseControllerTrace';

// @ts-ignore
export default class BaseController
  extends Mixin(
    BaseControllerStore,
    BaseControllerDelete,
    BaseControllerUpdate,
    BaseControllerRead,
    BaseControllerConnect,
    BaseControllerHead,
    BaseControllerOptions,
    BaseControllerTrace
  )
  implements ControllerAdapter {}
