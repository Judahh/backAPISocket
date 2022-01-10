import { Operation } from 'flexiblepersistence';
import { AbstractControllerDefault } from 'backapi';
export default class BaseControllerDefault extends AbstractControllerDefault {
  protected emit(responseOrSocket, operation: Operation, status, object) {
    const returnName =
      this.formatName().charAt(0).toLowerCase() +
      this.formatName().slice(1) +
      '.' +
      Operation[operation];
    return responseOrSocket.emit(returnName, { status, object });
  }
}
