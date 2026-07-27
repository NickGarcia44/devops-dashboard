from datetime import datetime

from sqlalchemy import DateTime, Float
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base


class SystemMetrics(Base):
    __tablename__ = "system_metrics"

    id: Mapped[int] = mapped_column(primary_key=True)

    cpu_percent: Mapped[float] = mapped_column(
        Float,
        nullable=False
    )

    memory_percent: Mapped[float] = mapped_column(
        Float,
        nullable=False
    )

    disk_percent: Mapped[float] = mapped_column(
        Float,
        nullable=False
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )
