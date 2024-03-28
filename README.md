# cs218-midterm

Website for an e-bike company that allows form data as an input field for an operator to upload images to an object store. Oncee the image has been uploaded, a function should be triggered which will send the meta-data of this image into a key-value store

Components 
- Web Development:
    - Front-end = ReactJS
    - Back-end = Flask

- Cloud services:
    - AWS System Manager Parameter Store = to fetch access and secret keys
    - AWS S3 = to store images
    - AWS Lambda = to process image meta-data and insert into dynamoDB
    - AWS DynamoDB = to store image meta-data

Architecture Diagram
![architecture-diagram](https://github.com/farhanahraf03/cs218-midterm/assets/42094234/c67311a7-f77d-41af-9683-2412830e544b)

Video Demo
- https://drive.google.com/file/d/1nT7P0Bh9K7HDEILSf0o_ZD4nj14bI9Uw/view?usp=sharing
