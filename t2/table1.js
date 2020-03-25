
$(function(){
  
  var myChart = echarts.init($('.main').get(0));
  var xData = [2000,2005,2010,2015,2020];
  var yData = [0,2,4,6,8,10];
   var container = $('.main');
  var option ={
    title:{
      text:'JavaScript语言排名变化'
    },
    tooltip:{
      trigger:'axis',
      formatter:function(param){
        return '排名<br>' + param[0].name + ":" + param[0].value
      },
    },
    legend:{
      data:['排名']
    },
    xAxis:{
      type:'category',
      data:xData
      },
    yAxis:{
      type:'value',
      data:yData
    },
    series:[{
      
      type:'line',
      data:[6,9,8,8,7]
    }]
  };
  myChart.setOption(option);
})
