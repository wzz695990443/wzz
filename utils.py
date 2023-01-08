import time

import numpy as np
import pymysql
import numpy


def get_time():
    time_str = time.strftime("%Y{}%m{}%d{} %X")
    return time_str.format("年", "月", "日")


def get_conn():
    conn = pymysql.connect(host='localhost', user="root", password="wangkonglioujia9", db="舒尔特方格")
    cursor = conn.cursor()
    return conn, cursor


def close_conn(conn, cursor):
    cursor.close()
    conn.close()


def query(sql, *args):
    conn, cursor = get_conn()
    cursor.execute(sql, args)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res


def get_info(id):
    sql = "select * from traindata where user=" + id
    print(sql)
    res = query(sql)
    return res


def get_user(id):
    sql = "select * from user where id =" + id
    res = query(sql)
    return res


def get_userdata():
    sql = "select * from user"
    res = query(sql)
    return res


def get_type_l1_data(type,user):
    sql = "select * from traindata where type = ? and user = ?"
    sql=sql.replace('?',type,1)
    sql=sql.replace('?',user,1)
    res = query(sql)
    return res


def exist_id_pwd(id_, pwd_):
    exist = False
    i = 0
    data = get_user("id")
    id, pwd = [], []
    for a, b, c, d, e in data:
        id.append(a)
        pwd.append(e)
    for k in id:
        if str(k) == id_:
            exist = True
            break
        i = i + 1
    if exist:
        if pwd_ == str(pwd[i]):
            return True
        else:
            return False


def h(a, b):
    res = a / b * np.log(a / b)
    return res


def get_r2(id):
    data = get_info(id)
    tp, sz, zm, hz = 0, 0, 0, 0
    for a, b, c, d, e, f in data:
        if e == 1:
            tp = tp + 1
        elif e == 2:
            sz = sz + 1
        elif e == 3:
            zm = zm + 1
        elif e == 4:
            hz = hz + 1
    sum = tp + sz + zm + hz
    res = -(h(tp, sum) + h(sz, sum) + h(zm, sum) + h(hz, sum))
    return res


def standardization(data):
    mu = np.mean(data, axis=0)
    sigma = np.std(data, axis=0)
    return (data - mu) / sigma


def set_gamedata(time, acc, user):
    print(time)
    print(acc)
    sql = "INSERT INTO 舒尔特方格.traindata (date, sec, accuracy, type, user) VALUES (curdate()," + str(time) + "," + str(acc) + ",2,"+str(user)+")"
    conn, cursor = get_conn()
    cursor.execute(sql)
    conn.commit()
    close_conn(conn, cursor)

def get_level(age_,sec):
    age=int(age_)
    if age>=5 and age<=6:
        if sec<=30:
            return "优秀"
        elif sec<=40:
            return "良好"
        elif sec<=48:
            return "一般"
        else:
            return "差"
    elif age<=11:
        if sec<=26:
            return "优秀"
        elif sec<=32:
            return "良好"
        elif sec<=40:
            return "一般"
        else:
            return "差"
    elif age <= 17:
        if sec<=16:
            return "优秀"
        elif sec<=18:
            return "良好"
        elif sec<=23:
            return "一般"
        else:
            return "差"
    else:
        if sec<=12:
            return "优秀"
        elif sec<=16:
            return "良好"
        elif sec<=19:
            return "一般"
        else:
            return "差"

def check_id():
    data = np.array(get_userdata())
    data.reshape(-1, 5)
    return data[-1][0]

def regist_id_pwd(pwd,name,gender,age):
    if gender=='男' or gender=='女':
        sql="INSERT INTO 舒尔特方格.user (Name, Gender, Age, Password) VALUES ('?', '?', ?, ?)"
        sql = sql.replace('?', name, 1)
        sql = sql.replace('?', gender, 1)
        sql = sql.replace('?', age, 1)
        sql = sql.replace('?', pwd, 1)
        conn, cursor = get_conn()
        print(sql)
        cursor.execute(sql)
        conn.commit()
        close_conn(conn, cursor)
        return True
    else:
        return False


