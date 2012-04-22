var fs = require('fs');
var counter = 0;
fs.readFile(process.argv[2],function(err,data) {
  var lines = data.toString().split("\r\n");
  var data = [];
  var columns = [];
  var dataLength = lines.length-2;
  var minDate, maxDate;
  var timeShift = parseInt(process.argv[3],10)*3600000;
  
  lines.forEach(function(item,i) {
    var dataRow = "";
    if(i==0) {
      var line = item.split(",");
      line.shift();
      columns= line;
    }    
    else if(i==2) {
      //getMinDate
      item = item.replace(/"/g,"");
      var line = item.split(",");
      minDate = new Date(line[0]);
      line[0] = "new Date('"+line[0]+"')";
      data.push("["+line.join(",")+"]");
    } 
    else if(i>2 && i<dataLength) {
      item = item.replace(/"/g,"");
      var line = item.split(",");
      line[0] = "new Date('"+line[0]+"')";
      data.push("["+line.join(",")+"]");
    } else if(i==dataLength) {
      //maxDate
      item = item.replace(/"/g,"");
      var line = item.split(",");
      maxDate = new Date(line[0]);
      line[0] = "new Date('"+line[0]+"')";
      data.push("["+line.join(",")+"]");
    }
  });
  console.log("var minDate="+minDate.getTime()+", maxDate="+maxDate.getTime()+";");
  console.log("var timeShift = " + timeShift + ";");
  console.log("var columns = [\r\n {required: true, type:'datetime',header:'Time'},");
  columns.forEach(function(item){
    console.log("{type:'number',header:"+item+"},");
  });
  console.log("];");
  console.log("var chartData = [\r\n"+data.join(",\r\n")+"];");
});