// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        bubbleNum: 4,
        bubblePrefab: {
            default: null,
            type: cc.Prefab
        },
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    spawnBubble() {
        let arr = new Array()
        for (let i = 0; i < this.bubbleNum; i++) {
            arr[i] = cc.instantiate(this.bubblePrefab)
        }
        arr.forEach((ele, index) => {
            ele.setPosition(0,0)
            this.node.addChild(ele)
        });
    },
    onLoad() {
        // 初始化计时器
        this.spawnBubble()
        this.node.on('bubbleClick', function (msg) {
            console.log("点击泡泡")
        })
    },

    // update (dt) {},
});