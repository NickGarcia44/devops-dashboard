from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.repositories.metrics import create_metric, get_metrics
from app.services.monitoring import get_system_metrics


router = APIRouter(
    prefix="/monitoring",
    tags=["Monitoring"]
)


@router.get("/")
def monitoring(
    db: Session = Depends(get_db)
):
    metrics = get_system_metrics()

    create_metric(
        db,
        metrics["cpu"]["percent"],
        metrics["memory"]["percent"],
        metrics["disk"]["percent"],
    )

    return metrics

@router.get("/history")
def history(
    db: Session = Depends(get_db)
):
    return get_metrics(db)