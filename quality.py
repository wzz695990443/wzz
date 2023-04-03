from PIL import Image as ImagePIL
import os


def transfer(infile, outfile):
    im = ImagePIL.open(infile)
    im.save(outfile, quality=50)  # 保存图片时，设置图片质量，quality=50表示压缩率为50%


if __name__ == '__main__':
    for root, dirs, files in os.walk("C:/Users/wzz/Desktop/123/"):  # 图片所在的目录
        for item in files:
            list = item.split(".")
            print(list[-1])
            if (list[-1] == "jpg"):
                new_name = list[0] + ".jpg"
                os.rename("C:/Users/wzz/Desktop/123/" + item, "C:/Users/wzz/Desktop/123/" + new_name)
                print(new_name)
                transfer("C:/Users/wzz/Desktop/123/" + new_name, "C:/Users/wzz/Desktop/123/" + new_name)
