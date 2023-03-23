class SupportHandler {
  nextHandler: SupportHandler | null
  
  constructor() {
    this.nextHandler = null
  }
  
  setNextHandler(handler: SupportHandler) {
    this.nextHandler = handler
  }
  
  handleRequest(request: { type: string, priority: string }) {
    if (this.nextHandler) {
      return this.nextHandler.handleRequest(request)
    }
    
    return null
  }
}

class SimpleRequestHandler extends SupportHandler {
  handleRequest(request: { type: string, priority: string }) {
    if (request.type === 'simple') {
      console.log('Простой запрос обрабатывается')
      return true
    } else {
      return super.handleRequest(request)
    }
  }
}

class ComplexRequestHandler extends SupportHandler {
  handleRequest(request: { type: string, priority: string }) {
    if (request.type === 'complex') {
      console.log('Сложный запрос обрабатывается')
      return true
    } else {
      return super.handleRequest(request)
    }
  }
}

class UrgentRequestHandler extends SupportHandler {
  handleRequest(request: { type: string, priority: string }) {
    if (request.priority === 'urgent') {
      console.log('Срочный запрос обрабатывается')
      return true
    } else {
      return super.handleRequest(request)
    }
  }
}

const simpleHandler = new SimpleRequestHandler()
const complexHandler = new ComplexRequestHandler()
const urgentHandler = new UrgentRequestHandler()

simpleHandler.setNextHandler(complexHandler)
complexHandler.setNextHandler(urgentHandler)

simpleHandler.handleRequest({ type: 'simple', priority: 'normal' })
simpleHandler.handleRequest({ type: 'complex', priority: 'normal' })
simpleHandler.handleRequest({ type: 'simple', priority: 'urgent' })
