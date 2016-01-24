var Ball = function(ballType) {
  this.ballType = ballType === undefined ? "regular" : "super"
};

var Ghost = function() {
    this.color = ["pink","red","yellow","white"][Math.floor(Math.random() * 4)]
}
