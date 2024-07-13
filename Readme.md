------------- How to setup professional backend --------------

1. create a repo in github
2. clone it to your local by git clone "repo-link.git"

3. npm init for package.json
4. create public with temp folder
5. create src with app.js index.js constants.js and folders such as
   controllers , db , middlewares , models , routes , utils
6. MUST use .gitignore
7. MUST use .env

8. setup nodemon npm i -d nodemon
9. setup prettier npm i -D prettier
   then do .prettierrc and .prettierignore

10. Database connection created
    way 1
    way 2

    ( while connecting with database remember two things 1. error may come so wrap in try and catch 2. secondly database always in another continent so use async )

11. npm i dotenv express mongoose
    ---NOTE : as early as possible configure dotenv

12. user model and video model done

13. npm i mongoose-aggregate-paginate-v2

14. npm i bcrypt or bcryptjs and jsonwebtoken
    // jwt is a bearer token

15. npm i cloudinary multer

16. routes created

17. register controller logic added and postman setup and usages done
