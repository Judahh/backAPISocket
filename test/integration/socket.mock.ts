class MockSocket {
  received = {};
  name = '';
  emit(name, object): MockSocket {
    this.name = name;
    this.received = object;
    return this;
  }
}

const mockSocket = new MockSocket();

export { mockSocket };
