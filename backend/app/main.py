from fastapi import FastAPI

app = FastAPI(
    title="DevOps Dashboard",
    version="0.1.0",
    description="API para monitoramento de infraestrutura."
)


@app.get("/")
def root():
    return {
        "status": "online",
        "version": "0.1.0"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }