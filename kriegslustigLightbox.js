kriegslustigLightbox = {
  boxes: {}
}

kriegslustigLightbox.Lightbox = {
  config: {
    openClass: 'kriegslustigLightbox--js--open'
  }
, init: function () {
    var self = this
    self.checkRoute()
    self.addURLListeners()
  }
, addURLListeners: function () {
    var self = this
    setInterval(function () {
      self.checkRoute()
    }, 100)
  }
, checkRoute: function () {
    var self = this
  , hashSplit = location.href.split('#')
    if(hashSplit[1] == self.name) {
      self.open()
    } else {
      self.close()
    }
  }
, open: function () {
    var self = this
  , hashSplit = location.href.split('#')
  , openEvent = new CustomEvent('open', {detail: {
      target: self
    }})
    if(self.element.className.indexOf(self.config.openClass) > -1) return
    hashSplit[1] = self.name
    location.href = hashSplit.join('#')
    self.element.style.display = 'flex'
    setTimeout(function () {
      if(self.element.className.indexOf(self.config.openClass) > -1) return
      self.element.className += ' ' + self.config.openClass
      self.element.dispatchEvent(openEvent)
    }, 100)
  }

, close: function () {
    var self = this
  , closeEvent = new CustomEvent('close', {detail: {
      target: self
    }})
    if(self.element.className.indexOf(self.config.openClass) < 0) return
    location.href = location.href.split('#')[0] + '#'
    self.element.className = self.element.className.replace(' ' + self.config.openClass, '')
    setTimeout(function () {
      self.element.style.display = 'none'
      self.element.dispatchEvent(closeEvent)
    }, 200)
  }
}

Template.kriegslustigLightbox.rendered = function () {
  var self = this
  if(!self.data.name) {
    console.log('Failed to initiate lightbox, no name given')
    return false
  }
  kriegslustigLightbox.boxes[self.data.name] = Object.create(kriegslustigLightbox.Lightbox)
  kriegslustigLightbox.boxes[self.data.name].name = self.data.name
  kriegslustigLightbox.boxes[self.data.name].element = this.firstNode
  kriegslustigLightbox.boxes[self.data.name].init()
}