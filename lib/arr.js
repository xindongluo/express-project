var arr=[
    '你很棒',
    '今天学的什么',
    '生活总是很美好',
]
exports.getone=function(){
    return arr[Math.floor(Math.random()*arr['length'])]
}
