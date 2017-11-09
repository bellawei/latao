$(function(){
    var leftchart = echarts.init(document.getElementById('left-chart'));
    
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '2017年入学人数'
                },
                tooltip: {},
                legend: {
                    data:['人数']
                },
                xAxis: {
                    data: ["java","c++","前端","UI","PHP","产品经理"]
                },
                yAxis: {},
                series: [{
                    name: '人数',
                    type: 'bar',
                    data: [8000, 12000, 20000, 18000, 16000, 21000]
                }]
            };
    
            // 使用刚指定的配置项和数据显示图表。
            leftchart.setOption(option);

    var rightchart = echarts.init(document.getElementById('right-chart'));
            option = {
                title : {
                    text: '鞋子销量汇总',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['乔丹','阿迪达斯','耐克','新百伦','李宁']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'乔丹'},
                            {value:310, name:'阿迪达斯'},
                            {value:234, name:'耐克'},
                            {value:135, name:'新百伦'},
                            {value:1548, name:'李宁'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            rightchart.setOption(option);
 
            

            
})