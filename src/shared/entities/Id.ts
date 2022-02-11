import { v4 as uuidV4, validate } from 'uuid';

export default class Id {
  static make() {
    return uuidV4();
  }

  static isValid(id: string) {
    return validate(id);
  }
}
