# Remake Url site
<img src="https://github.com/LiyLi1122/remake_url/blob/main/remake%20url%20.png">
An awesome web application provide you a service to shorten long url you won't see annoying long-winded url anymore.

## Project 
### Features

|Funtions|Detail|Method|URL|
|---|---|---|---|
|  View homepage of Remake Url site | Users can key url in the field on the website. |  GET | / |
|  Create shorten URL | After keying URL and submitting, the form will send to this route. |  POST | /remakeUrls  |
|  Connect shorten URL | Users will get a shorten URL. If clicking the hyper link will redirect to target website.|  GET |/remakeUrls/:url  |

### Installation
The following instructions will get you a copy of this project.

step1. clone https://github.com/LiyLi1122/remake_url.git

step2. open terminal

step3. cd remake_url

step4. npm install

step5. touch .env

step6. key your mongoDB password in .env

step7. npm run dev

step8. open your browser with the URL http://localhost:3000

## Authors
<a href="https://github.com/LiyLi1122" target="_blank">Lily Wang</a>
