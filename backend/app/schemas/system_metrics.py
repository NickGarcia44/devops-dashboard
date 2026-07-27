from datetime import datetime

from pydantic import BaseModel


class SystemMetricsResponse(BaseModel):
    cpu_percent: float
    memory_percent: float
    disk_percent: float
    created_at: datetime

    class Config:
        from_attributes = True