module.exports = function () {
    this.registerHandler('BeforeFeatures', {timeout: 60000}, function (features, callback) {
      //  console.log("BeforeFeatures")
        callback();
    });

    this.registerHandler('BeforeScenario', {timeout: 60000}, function (scenarios, callback) {
      //  console.log("BeforeScenario")
        callback();
    });

    this.registerHandler('AfterScenario', {timeout: 60000}, function (scenarios, callback) {
       // console.log("AfterScenario")
        callback();
    });

    this.registerHandler('AfterFeatures',  {timeout: 60000}, function (features, callback) {
       // console.log("AfterFeatures")
        callback();
    });

}
