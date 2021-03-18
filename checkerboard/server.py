from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def func1():
    input1=int(8)
    input2=int(8)
    return render_template("index2.html", input1=input1, input2=input2)

@app.route("/<x>")
def func2(x):
    input1=int(x)
    input2=int(8)
    return render_template("index2.html", input1=input1, input2=input2)  

@app.route("/<x>/<y>")
def chek_board(x,y):
    input1=int(x)
    input2=int(y)
    return render_template("index.html", input1=input1, input2=input2)

if __name__ == "__main__":
    app.run(debug = True)