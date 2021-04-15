import ControllerConnectAdapter from './controllerConnectAdapter';
import ControllerDeleteAdapter from './controllerDeleteAdapter';
import ControllerHeadAdapter from './controllerHeadAdapter';
import ControllerOptionsAdapter from './controllerOptionsAdapter';
import ControllerReadAdapter from './controllerReadAdapter';
import ControllerStoreAdapter from './controllerStoreAdapter';
import ControllerTraceAdapter from './controllerTraceAdapter';
import ControllerUpdateAdapter from './controllerUpdateAdapter';

export default interface ControllerAdapter
  extends ControllerStoreAdapter,
    ControllerDeleteAdapter,
    ControllerUpdateAdapter,
    ControllerReadAdapter,
    ControllerConnectAdapter,
    ControllerHeadAdapter,
    ControllerOptionsAdapter,
    ControllerTraceAdapter {}
