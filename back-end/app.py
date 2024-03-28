from flask import Flask, request, jsonify
from flask_cors import CORS
import boto3

app = Flask(__name__)
CORS(app)

ssm = boto3.client('ssm', region_name='us-east-2')

AWS_ACCESS_KEY_ID = 'REACT_APP_ACCESS_KEY_ID'
AWS_SECRET_ACCESS_KEY = 'REACT_APP_SECRET_KEY_ID'
BUCKET_NAME = 'REACT_APP_BUCKET_NAME'

s3 = boto3.client('s3', aws_access_key_id=AWS_ACCESS_KEY_ID, aws_secret_access_key=AWS_SECRET_ACCESS_KEY)

@app.route('/upload', methods=['POST'])
def upload_image():
    try:
        brand = request.form['brand']
        model = request.form['model']
        color = request.form['color']
        image = request.files['image']

        image_path = f"{brand}_{model}_{color}.jpg"
        s3.upload_fileobj(image, BUCKET_NAME, image_path)
        
        return jsonify({'message': 'Image uploaded successfully!'}), 200
    except Exception as e:
        print(e)
        return jsonify({'error': 'Failed to upload image.'}), 500

if __name__ == '__main__':
    app.run(debug=True)
