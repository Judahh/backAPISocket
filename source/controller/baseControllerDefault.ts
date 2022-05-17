import { Operation } from 'flexiblepersistence';
import { AbstractControllerDefault } from 'backapi';
import { toJSON } from 'flatted';

export default class BaseControllerDefault extends AbstractControllerDefault {
  protected emit(responseOrSocket?, operation?: Operation, status?, object?) {
    const returnName =
      this.formatName().charAt(0).toLowerCase() +
      this.formatName().slice(1) +
      (operation === undefined ? '' : '.' + Operation[operation]);
    return responseOrSocket.emit(returnName, {
      status,
      object: toJSON(object),
    });
  }
}
