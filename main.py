from fastapi  import FastAPI,Response, Request,Depends
import jwt
from typing import Optional

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello":"World"}

@app.get("/items/{item_id}")
def read_item(item_id :init, q :Optional[str]=None):
    return {"item_id":item_id,"q":q}

# token 생성
@app.post('/login')
async def login(response:request):
    # userauthe logic

    #jwt token  
    token =jwt.encode({"user_id" :user_id}, SECRET_KEY,algorithm="HS256")

