import numpy as np

import utils
from utils import get_user


if __name__ == '__main__':
    sql="INSERT INTO 舒尔特方格.user (ID, Name, Gender, Age, Password) VALUES (?, '?', '?', ?, ?)"
    sql=sql.replace("?","1")
    print(sql)

