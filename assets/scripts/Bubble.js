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
        riseDuration: 0,
        riseHeight: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    setRiseAction() {
        // 跳跃上升
        var riseUp = cc.moveBy(this.riseDuration, cc.v2(0, this.riseHeight)).easing(cc.easeCubicActionOut());

        // 不断重复，而且每次完成落地动作后调用回调来播放声音
        //  var callback = cc.callFunc(this.playJumpSound, this);
        return riseUp
        //  return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
    },
    start() {

    },
    onLoad() {
        this.riseDuration = 10
        this.riseHeight = 500
        this.riseAction=this.setRiseAction()
        this.node.runAction(this.riseAction);
        this.node.on('mousedown',event=>{
            console.log("在泡泡上点击")
            this.node.stopAction(this.riseAction)
            this.node.dispatch("bubbleClick",event)
        })
    }

    // update (dt) {},
});