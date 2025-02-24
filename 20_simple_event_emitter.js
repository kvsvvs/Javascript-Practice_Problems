class EventEmitter {
    constructor() {
      this.events = new Map();
    }
  
    on(event, handler) {
      if (!this.events.has(event)) {
        this.events.set(event, new Set());
      }
      this.events.get(event).add(handler);
    }
  
    off(event, handler) {
      if (this.events.has(event)) {
        this.events.get(event).delete(handler);
        if (this.events.get(event).size === 0) {
          this.events.delete(event);
        }
      }
    }
  
    emit(event, ...args) {
      if (this.events.has(event)) {
        this.events.get(event).forEach(handler => handler(...args));
      }
    }
  }
  
  // Example usage:
  const emitter = new EventEmitter();
  
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  emitter.on("greet", greet);
  emitter.emit("greet", "Alice"); // Output: Hello, Alice!
  emitter.off("greet", greet);
  emitter.emit("greet", "Bob"); // No output, handler removed
  