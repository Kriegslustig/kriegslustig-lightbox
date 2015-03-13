boxes = {}

Lightbox = {
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
    if(self.element.className.indexOf(self.config.openClass) > -1) return
    self.element.style.display = 'flex'
    setTimeout(function () {
      if(self.element.className.indexOf(self.config.openClass) > -1) return
      self.element.className += ' ' + self.config.openClass
    }, 100)
  }

, close: function () {
    var self = this
    if(self.element.className.indexOf(self.config.openClass) < 0) return
    self.element.className = self.element.className.replace(' ' + self.config.openClass, '')
    setTimeout(function () {
      self.element.style.display = 'none'
    }, 200)
  }
}

Template.kriegslustigLightbox.rendered = function () {
  var self = this
  boxes[self.data.name] = Object.create(Lightbox)
  boxes[self.data.name].name = self.data.name
  boxes[self.data.name].element = this.firstNode
  boxes[self.data.name].init()
}