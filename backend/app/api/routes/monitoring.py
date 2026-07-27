from fastapi import APIRouter

from app.services.monitoring import get_system_metrics


router = APIRouter(
    prefix="/monitoring",
    tags=["Monitoring"]
)


@router.get("/")
def monitoring():

    return get_system_metrics()