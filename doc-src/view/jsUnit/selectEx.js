var SelectEx = RGUI.SelectEx;

var source = [
    {id: 0, name: '选项1'},
    {id: 1, name: '选项2'},
    {id: 2, name: '选项3'}
];

var selectEx = new SelectEx({
    data: {
        source: source
    }
}).$inject('#j-example1');

var selectEx = new SelectEx({
    data: {
        source: source,
        disabled: true
    }
}).$inject('#j-example2');