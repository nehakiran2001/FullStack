
//object method
var carInfo={
          make:"toyota",
          year:"1990",
          model:"consery",
          carAlert:function(){
            alert("we have a car")
          }
};
carInfo.carAlert()

//keyword
var carInfo={
          make:"toyota",
          year:"1990",
          model:"consery",
          carAlert:function(){
            alert("your carInfo is make:"+this.make+"year:"+this.year+"model:"+this.model);
          }
};
carInfo.carAlert()
