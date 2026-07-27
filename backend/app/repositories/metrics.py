from sqlalchemy.orm import Session

from app.models.system_metrics import SystemMetrics


def create_metric(
    db: Session,
    cpu_percent: float,
    memory_percent: float,
    disk_percent: float,
):
    metric = SystemMetrics(
        cpu_percent=cpu_percent,
        memory_percent=memory_percent,
        disk_percent=disk_percent,
    )

    db.add(metric)
    db.commit()
    db.refresh(metric)

    return metric


def get_metrics(db: Session):
    return (
        db.query(SystemMetrics)
        .order_by(SystemMetrics.created_at.desc())
        .all()
    )