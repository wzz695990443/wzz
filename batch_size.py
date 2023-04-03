from PIL import Image
import os.path
import glob


def Resize(file, outdir, width, height):
    imgFile = Image.open(file)
    try:
        newImage = imgFile.resize((width, height), Image.BILINEAR)
        newImage.save(os.path.join(outdir, os.path.basename(file)))
    except Exception as e:
        print(e)


for file in glob.glob("C:/Users/wzz/Desktop/123/*.jpg"):  # 图片所在的目录
    Resize(file, "C:/Users/wzz/Desktop/123/", 224, 224)  # 新图片存放的目录
