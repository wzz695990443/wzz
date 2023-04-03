from PIL import Image

def Image_PreProcessing():
	# 待处理图片存储路径
	im = Image.open("C:/Users/wzz/Desktop/123/善1_S1.jpg")
	# Resize图片大小，入口参数为一个tuple，新的图片大小
	imBackground = im.resize((260,184))
	#处理后的图片的存储路径，以及存储格式
	imBackground.save("C:/Users/wzz/Desktop/123/1.jpg",'JPEG')
if __name__ == "__main__":
	Image_PreProcessing()
