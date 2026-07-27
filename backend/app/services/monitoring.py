import psutil
import platform
import socket
import time


def get_system_metrics():

    memory = psutil.virtual_memory()
    disk = psutil.disk_usage("/")

    return {
        "system": {
            "os": platform.system(),
            "hostname": socket.gethostname(),
            "uptime": time.time() - psutil.boot_time()
        },

        "cpu": {
            "percent": psutil.cpu_percent(interval=1),
            "cores": psutil.cpu_count()
        },

        "memory": {
            "total": memory.total,
            "used": memory.used,
            "percent": memory.percent
        },

        "disk": {
            "total": disk.total,
            "used": disk.used,
            "percent": disk.percent
        }
    }