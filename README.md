# 🌥️ Cloud Resume Challenge – Anthony Moncrieffe

Welcome to my take on the #CloudResumeChallenge! This was more than just a project — it was my way of proving to myself (and future employers) that I can learn fast, build confidently, and adapt to the ever-evolving cloud space.

I'm looking to continue learning and increasing my skillset. This challenge let me tie it all together — HTML, S3, Lambda, and DynamoDB — all on one resume. Let's dive in. 😎

🚧 What I Built

✅ A responsive HTML/CSS resume hosted on AWS S3

✅ Live visitor count tracked in DynamoDB and powered by AWS Lambda

✅ API Gateway to connect the frontend and backend

✅ CI/CD pipeline with GitHub Actions

📋 Step-by-Step Build Process

1. HTML + CSS Resume

Used a pre-built site template, nothing fancy and made changes to fit my resume.

2. Static Hosting on S3

Created a public S3 bucket

Set index.html and error.html

Created policeis to enable access

3. Custom Domain + HTTPS

Route 53 + ACM for SSL

Hooked domain to CloudFront for edge delivery

4. Visitor Counter Backend

Created a Lambda function in Python

Stores visitor count in DynamoDB

Exposed via API Gateway

5. JavaScript Integration

Called API from main.js

Displayed count dynamically on the page

6. GitHub Actions

Pushed all code to GitHub

Set up Actions to auto-deploy frontend and backend on push

🧱 Architecture Diagram



Challenges I Hit

CORS issues with API Gateway (fun times 🤦🏾‍♂️)

JavaScript wouldn't find the DOM element until I moved the script to the bottom of the page

IAM permissions for Lambda were way pickier than expected

