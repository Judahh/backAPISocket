import { Operation } from 'flexiblepersistence';
import { AbstractControllerDefault } from 'backapi';

export default class BaseControllerDefault extends AbstractControllerDefault {
  protected emit(
    _requestOrData?,
    responseOrSocket?,
    _headers?,
    operation?: Operation,
    status?,
    object?
  ) {
    const returnName =
      this.formatName().charAt(0).toLowerCase() +
      this.formatName().slice(1) +
      (operation === undefined ? '' : '.' + Operation[operation]);
    const cache: any[] = [];
    const cleanObject = JSON.parse(
      JSON.stringify(object, (_key, value) => {
        if (typeof value === 'object' && value !== null) {
          // Duplicate reference found, discard key
          if (cache.includes(value)) return;
          // Store value in our collection
          cache.push(value);
        }
        return value;
      })
    );
    return responseOrSocket.emit(returnName, {
      status,
      object: cleanObject,
    });
  }
}
