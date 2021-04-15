class MockSocket {
  received = {};
  emit(object): MockSocket {
    this.received = object;
    return this;
  }
}

const mockSocket = new MockSocket();

export { mockSocket };
