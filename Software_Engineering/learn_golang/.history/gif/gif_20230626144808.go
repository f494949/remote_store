package main

import (
	"image"
	"image/color"
	"image/gif"
	"os"
)
var palette=[]color.Color{color.White,color.Black,color.RGBA{0x22,0xCC,0x33,0xff}}
func main(){
	const (
		nframes =100
		delay = 8
		size = 200
	)
	phase :=0
	anim :=gif.GIF{LoopCount:nframes}
	for i:=0;i<nframes;i++ {
		rect :=image.Rect(0,0,size+1,size+1)
		img :=image.NewPaletted(rect,palette)
		for t:=0;t<size;t++ {
			x:=phase
			y:=t
			img.SetColorIndex(x,y,1)
		}
		phase+=size/nframes
		anim.Delay=append(anim.Delay,delay)
		anim.Image=append(anim.Image,img)
	}
	var filename ="test.gif"
	if len(os.Args)>1 {
		filename =os.Args[1]+".gif"
	}
	file,_:=os.Create(filename)
	defer file.Close()
	gif.EncodeAll(file,&anim)
}
————————————————
版权声明：本文为CSDN博主「dong_beijing」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/dong_beijing/article/details/79342773