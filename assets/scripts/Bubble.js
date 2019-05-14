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
        riseDuration: 0,//上升时间
        riseHeight: 0,//上升高度
        word: '',//显示的单词
        wordDisplay: {
            default: null,
            type: cc.Label
        },
        produceAudio: {
            default: null,
            type: cc.AudioClip
        },
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        },
    },
    setRiseAction() {
        // 跳跃上升
        return cc.moveBy(this.riseDuration, cc.v2(0, this.riseHeight)).easing(cc.easeCubicActionOut());
    },
    start() {

    },
    playProduceSound() {
        // 调用声音引擎播放声音
        cc.audioEngine.playEffect(this.produceAudio, false);
    },
    playScoreAudio() {
        this.stopAction()
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },
    stopAction(){
        this.node.stopAction(this.riseAction)
    },
    onLoad() {
        this.wordDisplay.string = this.word
        this.riseDuration = 5*Math.random()+5//TODO:需要参考坐标系  计算合理的高度
        this.riseHeight = 500
        this.riseAction = this.setRiseAction()
        this.playProduceSound()
        this.node.runAction(this.riseAction);
        this.node.on('mousedown', event => {
            this.node.dispatchEvent(new cc.Event.EventCustom('bubbleClick', true));
        })
    }

    // update (dt) {},
});