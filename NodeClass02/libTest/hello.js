/**
 * Created by dllo on 17/2/13.
 */
// exports.sayHello = function(Name){
//   console.log('Hello' + Name);
// };

module.exports = function(){
  var name;
  this.setName = function(name){
    this.name = name;
  };
  this.sayHello = function (){
    console.log('Hello' + this.name);
  }
};