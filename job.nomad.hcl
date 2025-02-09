job "metastudent" {
  type = "service"

  group "metastudent" {
    network {
      port "http" {
        to = 3000
      }
    }

    service {
      name     = "metastudent"
      port     = "http"
      provider = "nomad"
      tags = [
        "traefik.enable=true",
        "traefik.http.routers.metastudent.rule=Host(`metastudent.se`)||Host(`www.metastudent.se`)",
        "traefik.http.routers.metastudent.tls.certresolver=default",
      ]
    }

    task "metastudent" {
      driver = "docker"

      config {
        image = var.image_tag
        ports = ["http"]
      }

      resources {
        memory = 50
      }
    }
  }
}

variable "image_tag" {
  type = string
  default = "ghcr.io/datasektionen/metastudent:latest"
}
