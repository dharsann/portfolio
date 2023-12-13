from flask import Flask, render_template

app = Flask(__name__)
csrf = CSRFProtect()
csrf.init_app(app)

# Define routes for each page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/passions')
def passions():
    return render_template('passions.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
