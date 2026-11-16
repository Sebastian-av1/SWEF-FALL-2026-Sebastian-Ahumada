import datetime
import os
from functools import wraps

import jwt
from flask import Blueprint, g, jsonify, request

auth_bp = Blueprint("auth", __name__)

# Secret used to sign tokens. Lives only on the server.
SECRET_KEY = os.environ.get("JWT_SECRET", "dev-secret-key-change-me-0123456789abcdef")

# Hardcoded credentials (no database yet).
USERS = {
    "sebastian": "password123",
}


def create_access_token(username):
    payload = {
        "sub": username,
        "exp": datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=1),
    }
    return jwt.encode(payload, SECRET_KEY, algorithm="HS256")


def require_auth(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        header = request.headers.get("Authorization", "")
        if not header.startswith("Bearer "):
            return jsonify({"error": "Missing token"}), 401
        token = header.split(" ", 1)[1]
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        except jwt.PyJWTError:
            return jsonify({"error": "Invalid or expired token"}), 401
        g.username = payload["sub"]
        return f(*args, **kwargs)

    return wrapper


@auth_bp.post("/login")
def login():
    data = request.get_json(silent=True) or {}
    username = data.get("username")
    password = data.get("password")

    if not username or USERS.get(username) != password:
        return jsonify({"error": "Invalid username or password"}), 401

    return jsonify({"access_token": create_access_token(username), "token_type": "bearer"})


@auth_bp.get("/me")
@require_auth
def me():
    return jsonify({"message": f"Welcome, {g.username}!"})
