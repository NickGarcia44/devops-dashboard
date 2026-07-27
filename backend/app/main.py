from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.api.routes import monitoring
from app.database.base import Base
from app.database.session import engine
import app.models
# Importa os modelos para registrá-los no SQLAlchemy



@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    yield


app = FastAPI(
    title="DevOps Dashboard",
    version="0.1.0",
    description="API para monitoramento de infraestrutura.",
    lifespan=lifespan,
)


@app.get("/")
def root():
    return {
        "status": "online",
        "version": "0.1.0",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
    }

app.include_router(
    monitoring.router
)