interface ISing {
	sing()
}
interface IDance {
	dance()
}
class P implements ISing{
    sing() {
        
    }
}

class An implements ISing,IDance{
    sing() {
        console.log('唱歌')
    }
}

const p
