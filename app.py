from flask import Flask, jsonify
from flask import request
from flask import render_template
from flask import json
from numpy import *
import utils
from utils import *
app = Flask(__name__)
import json

global user

@app.route("/gamedata",methods=['POST'])
def gamedata():
    data=request.get_json()
    tim=data['time'][3]+data['time'][4]+'.'+data['time'][6]+data['time'][7]
    set_gamedata(tim,data['acc'],user)
    return data

@app.route("/game")
def game():
    return render_template("game.html")

@app.route("/main/type")
def type1():
    return render_template("type.html")

@app.route("/main/type2")
def type2():
    return render_template("type2.html")

@app.route("/main/type3")
def type3():
    return render_template("type3.html")

@app.route("/main/type4")
def type4():
    return render_template("type4.html")

@app.route('/type_r1_1')
def get_type_r1_1():
    data = np.array(utils.get_type_l1_data("1",user))
    data.reshape(-1, 6)
    meanacc = round(np.mean(data[:, 3]), 2)
    meantime = round(np.mean(data[:, 2]), 2)
    mintime = round(np.min(data[:, 2]), 2)
    num = data.shape[0]
    return jsonify({"nu": num, "ma": meanacc, "mi": mintime, "mt": meantime})


@app.route('/type_l_1')
def get_type_l_1():
    data = utils.get_type_l1_data("1",user)
    date, score, acc= [], [], []
    for a, b, c, d, e, f in data:
        date.append(b.strftime("%m-%d"))
        score.append(c)
        acc.append(d)
    return jsonify({"score": score, "date": date, "acc": acc})

@app.route('/type_r1_2')
def get_type_r1_2():
    data = np.array(utils.get_type_l1_data("2",user))
    data.reshape(-1, 6)
    meanacc = round(np.mean(data[:, 3]), 2)
    meantime = round(np.mean(data[:, 2]), 2)
    mintime = round(np.min(data[:, 2]), 2)
    num = data.shape[0]
    return jsonify({"nu": num, "ma": meanacc, "mi": mintime, "mt": meantime})


@app.route('/type_l_2')
def get_type_l_2():
    data = utils.get_type_l1_data("2",user)
    date, score, acc= [], [], []
    for a, b, c, d, e, f in data:
        date.append(b.strftime("%m-%d"))
        score.append(c)
        acc.append(d)
    return jsonify({"score": score, "date": date, "acc": acc})

@app.route('/type_r1_3')
def get_type_r1_3():
    data = np.array(utils.get_type_l1_data("3",user))
    data.reshape(-1, 6)
    meanacc = round(np.mean(data[:, 3]), 2)
    meantime = round(np.mean(data[:, 2]), 2)
    mintime = round(np.min(data[:, 2]), 2)
    num = data.shape[0]
    return jsonify({"nu": num, "ma": meanacc, "mi": mintime, "mt": meantime})


@app.route('/type_l_3')
def get_type_l_3():
    data = utils.get_type_l1_data("3",user)
    date, score, acc= [], [], []
    for a, b, c, d, e, f in data:
        date.append(b.strftime("%m-%d"))
        score.append(c)
        acc.append(d)
    return jsonify({"score": score, "date": date, "acc": acc})

@app.route('/type_r1_4')
def get_type_r1_4():
    data = np.array(utils.get_type_l1_data("4",user))
    data.reshape(-1, 6)
    meanacc = round(np.mean(data[:, 3]), 2)
    meantime = round(np.mean(data[:, 2]), 2)
    mintime = round(np.min(data[:, 2]), 2)
    num = data.shape[0]
    return jsonify({"nu": num, "ma": meanacc, "mi": mintime, "mt": meantime})


@app.route('/type_l_4')
def get_type_l_4():
    data = utils.get_type_l1_data("4",user)
    date, score, acc= [], [], []
    for a, b, c, d, e, f in data:
        date.append(b.strftime("%m-%d"))
        score.append(c)
        acc.append(d)
    return jsonify({"score": score, "date": date, "acc": acc})

@app.route('/login', methods=["POST"])
def login():
    id=request.form.get("id")
    pwd=request.form.get("pwd")
    if exist_id_pwd(id,pwd):
        global user
        user=str(id)
        return jsonify({"success":1})
    else:
        return jsonify({"success":0})

@app.route('/login_page')
def login_page():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('regist.html')

@app.route('/regist',methods=["POST"])
def regist():
    pwd = request.form.get("pwd")
    name = request.form.get('name')
    gender = request.form.get('gender')
    age = request.form.get('age')
    if regist_id_pwd(pwd,name,gender,age):
        id = check_id()
        return jsonify({"success": 1,"log":id})
    else:
        return jsonify({"success": 0})


@app.route("/time")
def get_time():
    return utils.get_time()

@app.route("/c1")
def get_c1_data():
    data=np.array(utils.get_info(user))
    data.reshape(-1,6)
    meanacc=round(np.mean(data[:,3]),2)
    meantime=round(np.mean(data[:,2]),2)
    mintime=round(np.min(data[:,2]),2)
    num=data.shape[0]
    return jsonify({"nu":num,"ma":meanacc,"mi":mintime,"mt":meantime})

@app.route("/c2")
def get_c2_data():
    userdata = np.array(utils.get_user(user))
    userdata.reshape(-1, 5)
    age=userdata[0][3]
    data = np.array(utils.get_info(user))
    data.reshape(-1, 6)
    meantime = round(np.mean(data[:, 2]), 2)
    num = data.shape[0]
    time = 0
    for i in range(num):
        time = time + data[i][2]
    return jsonify({"name": userdata[0][1], "time": round(time,2), "age": userdata[0][3], "level": get_level(age,meantime)})

@app.route("/l1")
def get_l1_data():
    data = utils.get_info(user)
    date,score=[],[]
    for a,b,c,d,e,f in data:
        date.append(b.strftime("%m-%d"))
        score.append(c)
    return jsonify({"score":score,"date":date})

@app.route("/l2")
def get_l2_data():
    data = utils.get_info(user)
    date, acc = [], []
    for a, b, c, d, e, f in data:
        date.append(b.strftime("%m-%d"))
        acc.append(d)
    return jsonify({"acc": acc, "date": date})

@app.route("/r1")
def get_r1_data():
    data = utils.get_info(user)
    type1,type2,type3,type4 = 0,0,0,0
    for a, b, c, d, e, f in data:
        if (e == 1):
            type1 = type1 + 1
        if (e == 2):
            type2 = type2 + 1
        if (e == 3):
            type3 = type3 + 1
        if (e == 4):
            type4 = type4 + 1
    return jsonify({"type1": type1, "type2": type2,"type3":type3,"type4":type4})

@app.route('/r2')
def get_r2_data():
    dyx=utils.get_r2(user)
    data = np.array(utils.get_info(user))
    data.reshape(-1, 6)
    meanacc = round(np.mean(data[:, 3]), 2)
    meantime = round(np.mean(data[:, 2]), 2)
    mintime = round(np.min(data[:, 2]), 2)
    sumtime = round(np.sum(data[:,2]),2)
    num = data[-1, 0]
    date = (data[-1,1]-data[0,1]).days
    return jsonify({"meantime": meantime, "dyx": dyx, "sumtime": sumtime, "mintime": mintime, "frequency":date/num, "meanacc":meanacc})

@app.route('/', methods=["POST","GET"])
def start():
    return render_template("login.html")

@app.route('/main')
def mainpage():
    return render_template("main.html")




if __name__ == '__main__':
    app.run()
