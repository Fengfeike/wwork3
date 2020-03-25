
$(function(){
  var myChart = echarts.init(document.getElementById('main'));
  var xData = [2000,2005,2010,2015,2020];
  var yData = [0,2,4,6,8,10];

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

var excel = document.getElementById('excel');
  var excelData =[
    ['Java', '1', '降', '-0.01%'],
    ['C', '2', '升', '+2.44%'],
    ['Python', '3', '升', '+1.41%'],
    ['C++', '4', '降', '-2.58%'],
    ['C#', '5', '升', '+2.07%'],
    ['Visual Basic .NET', '6', '降', '-1.17%'],
    ['JavaScript', '7', '降', '-0.85%'],
  ];
  var hot={
    data:excelData,
    colHeaders:[
      '语言名称',
      '排名',
      '升或降',
      '变化幅度'
    ],
    contextMenu:true,
    manualColumnResize: true,
    manualRowResize: true,
  };
  new Handsontable(excel,hot);
});
