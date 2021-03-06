var datas = [
    ['Java', 1, "降", "-0.01%"],
    ['C', 2, "升", "+2.44%"],
    ['Python', 3, "升", "+1.44%"],
    ['C++', 4, "降", "-2.58%"],
    ['C#', 5, "升", "+2.07%"],
    ['Visual Basic.NET', 6, "降", "-1.17%"],
    ['JavaScript', 7, "降", "-0.85%"]
],
    container = document.getElementById('example'),
    redu;

redu = new Handsontable(container, {
    data: datas,
    startRows: 7,
    startCols: 4,
    colHeaders: true,
    colWidths: 150,
    colHeaders: ["语言名称", "排名", "升或降", "变化幅度"],
    className: "htCenter htMiddle",
    licenseKey: 'non-commercial-and-evaluation'
})
var myCharts = echarts.init(document.getElementById('quxian'));
var options = {
    title: {
        text: 'JavaScript语言排名变化'
    },
    tooltip: {},
    xAxis: {
        data: ["2000", "2005", "2010", "2015", "2020"]
    },
    yAxis: {
    },
    series: [{
        name: '排名',
        type: 'line',
        data: [6, 9, 8, 8, 7]
    }]
};

myCharts.setOption(options);