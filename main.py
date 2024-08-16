from fastapi  import FastAPI,Response, Request,Depends
import jwt
import dotenv
app = FastAPI()


@app.post('/login')
async def login(response:request):
    # userauthe logic

    #jwt token  
    token =jwt.encode({"user_id" :user_id}, SECRET_KEY,algorithm="HS256")
