export const PHASES = [
  {
    id: 0, label: "Phase 0", title: "Environment Setup", month: "This Week",
    color: "#00D9FF", accent: "#00D9FF22", icon: "⚙️",
    weeks: [
      {
        week: 0, title: "Bootstrap Your Setup",
        topics: ["VS Code + extensions", "Git + GitHub account", "Docker Desktop / Docker Engine", "Ubuntu (WSL2 or dual-boot)", "AWS Free Tier account"],
        project: "Create repo: cloud-devops-journey. Push a README with your goals.",
        resources: ["code.visualstudio.com", "docs.docker.com/get-started", "aws.amazon.com/free"],
        linkedin: "\"Starting my Cloud & DevOps journey today. Repo is live. Here's my 12-month plan 🧵\"",
        github: "Push README.md with roadmap overview + tool versions",
      }
    ]
  },
  {
    id: 1, label: "Phase 1", title: "Linux · Networking · Git", month: "Month 1",
    color: "#7C3AED", accent: "#7C3AED22", icon: "🐧",
    weeks: [
      {
        week: 1, title: "Linux Foundations",
        topics: ["File system structure (/etc, /var, /home)", "ls, cd, cp, mv, rm, find, grep", "File permissions: chmod, chown", "Users & groups: adduser, sudo"],
        project: "Write a bash script that creates a folder structure for a new project.",
        resources: ["linuxcommand.org", "overthewire.org/wargames/bandit"],
        linkedin: "\"Week 1: Finally understand why Linux devs love the terminal. Here's what I learned about file permissions 🔐\"",
        github: "linux/week1-commands.md + week1-script.sh",
      },
      {
        week: 2, title: "Linux: SSH, Processes & Services",
        topics: ["SSH keygen + remote login", "ps, top, kill, systemctl", "Services: start/stop/enable", "Cron jobs: crontab -e"],
        project: "SSH into an EC2 instance (Free Tier). Schedule a cron job that logs uptime every hour.",
        resources: ["ssh.com/academy/ssh", "man7.org/linux/man-pages"],
        linkedin: "\"Week 2: Logged into a cloud server from my terminal for the first time. No GUI. Just me and the shell. 🖥️\"",
        github: "linux/week2-ssh-notes.md + cron-uptime.sh",
      },
      {
        week: 3, title: "Bash Scripting",
        topics: ["Variables, loops, conditionals", "Functions in bash", "Input/output redirection", "Script error handling (set -e, set -u)"],
        project: "Build a system health monitor script: CPU, disk, memory — outputs a report file.",
        resources: ["learnshell.org", "bash.cyberciti.biz/guide"],
        linkedin: "\"Week 3: Built my first real bash script — a system health monitor. Terminal is starting to feel like home 🏠\"",
        github: "linux/health-monitor.sh + README explaining usage",
      },
      {
        week: 4, title: "Networking Fundamentals",
        topics: ["IP addresses, subnets, CIDR", "DNS resolution (dig, nslookup)", "HTTP vs HTTPS, TCP/IP basics", "Ports, firewalls (ufw), curl & wget"],
        project: "Document how a request travels from browser → DNS → server. Draw the diagram.",
        resources: ["cloudflare.com/learning/network-layer", "networkingbasicsbook.com"],
        linkedin: "\"Week 4: Drew a diagram of what happens when you type a URL. The internet makes a lot more sense now 🌐\"",
        github: "networking/week4-notes.md + request-flow-diagram.png",
      },
      {
        week: 5, title: "Git Mastery",
        topics: ["clone, add, commit, push, pull", "Branching strategy (feature branches)", "Merge vs rebase", "Pull Requests + code review flow"],
        project: "Simulate a team workflow: create branches, open PRs, resolve a merge conflict.",
        resources: ["learngitbranching.js.org", "git-scm.com/book"],
        linkedin: "\"Week 5: Git branching finally clicked. Here's the branching strategy I'll use on all my projects going forward 🌿\"",
        github: "git/branching-demo repo with documented PR history",
      }
    ]
  },
  {
    id: 2, label: "Phase 2", title: "Docker", month: "Month 2",
    color: "#0EA5E9", accent: "#0EA5E922", icon: "🐳",
    weeks: [
      {
        week: 6, title: "Docker Fundamentals",
        topics: ["Images vs Containers", "docker pull, run, ps, stop, rm", "Docker Hub", "Container lifecycle"],
        project: "Pull nginx, run it, visit localhost:80. Document what happened.",
        resources: ["docs.docker.com/get-started", "play-with-docker.com"],
        linkedin: "\"Week 6: Ran my first Docker container. No more 'works on my machine' ever again 🐋\"",
        github: "docker/week6-basics.md",
      },
      {
        week: 7, title: "Dockerfile & Custom Images",
        topics: ["Writing a Dockerfile", "FROM, RUN, COPY, EXPOSE, CMD", "Build and tag images", "Layer caching optimization"],
        project: "Dockerize a simple Node.js Express API. Push image to Docker Hub.",
        resources: ["docs.docker.com/engine/reference/builder"],
        linkedin: "\"Week 7: Built and published my first Docker image. Here's the Dockerfile for a Node.js API 🛠️\"",
        github: "docker/node-api/ with Dockerfile + README",
      },
      {
        week: 8, title: "Docker Compose",
        topics: ["docker-compose.yml syntax", "Multi-container apps", "Volumes for persistence", "Networks between services"],
        project: "Compose a full stack: React frontend + Node backend + MongoDB. One command to run all three.",
        resources: ["docs.docker.com/compose", "composerize.com"],
        linkedin: "\"Week 8: One command to spin up a full stack app. Docker Compose is magic. Here's my setup 🎩\"",
        github: "docker/fullstack-compose/ with docker-compose.yml",
      },
      {
        week: 9, title: "Docker Projects Week",
        topics: ["Dockerize your portfolio website", "Dockerize a Python script", "Multi-stage builds", "Image size optimization"],
        project: "Dockerize 3 apps. Compare image sizes before/after optimization.",
        resources: ["docs.docker.com/develop/dev-best-practices"],
        linkedin: "\"Week 9: Dockerized 3 different apps this week. Reduced one image from 900MB to 120MB. Here's how 📉\"",
        github: "docker/portfolio-docker/ + python-app-docker/",
      }
    ]
  },
  {
    id: 3, label: "Phase 3", title: "AWS Cloud", month: "Month 3",
    color: "#F97316", accent: "#F9731622", icon: "☁️",
    weeks: [
      {
        week: 10, title: "AWS IAM + EC2",
        topics: ["IAM users, roles, policies", "Least privilege principle", "EC2 instance types", "Security groups, key pairs, Elastic IP"],
        project: "Launch an EC2 instance. SSH in. Deploy your Dockerized Node API on it.",
        resources: ["aws.amazon.com/training/digital", "freecodecamp.org/news/aws-ec2-guide"],
        linkedin: "\"Week 10: Deployed my first app to a real cloud server on AWS EC2. Steps inside 🚀\"",
        github: "aws/ec2-deployment-notes.md",
      },
      {
        week: 11, title: "AWS S3 + Static Hosting",
        topics: ["S3 buckets: create, upload, permissions", "Static website hosting on S3", "CloudFront CDN basics", "Route 53 custom domain"],
        project: "Host your portfolio website on S3 with a custom domain via Route 53.",
        resources: ["docs.aws.amazon.com/s3", "aws.amazon.com/cloudfront"],
        linkedin: "\"Week 11: My portfolio is now live on AWS S3 + CloudFront. Zero server. Pure cloud. ☁️\"",
        github: "aws/s3-static-site/ with deployment script",
      },
      {
        week: 12, title: "AWS VPC + RDS",
        topics: ["VPC, subnets, route tables", "Internet Gateway vs NAT", "RDS PostgreSQL setup", "Security groups for DB access"],
        project: "Create a VPC with public/private subnets. Put an RDS instance in the private subnet.",
        resources: ["docs.aws.amazon.com/vpc", "docs.aws.amazon.com/rds"],
        linkedin: "\"Week 12: Built a proper VPC with public/private subnets. Your DB should never be public-facing. Here's why 🔒\"",
        github: "aws/vpc-architecture-diagram.png + notes.md",
      },
      {
        week: 13, title: "AWS Lambda + CloudWatch",
        topics: ["Serverless functions with Lambda", "API Gateway triggers", "CloudWatch logs + alarms", "Cost monitoring + billing alerts"],
        project: "Build a serverless URL shortener with Lambda + API Gateway + DynamoDB.",
        resources: ["docs.aws.amazon.com/lambda", "serverless.com/framework/docs"],
        linkedin: "\"Week 13: Built a serverless URL shortener on AWS Lambda. No servers. Scales to millions. Here's the architecture 🏗️\"",
        github: "aws/url-shortener-lambda/",
      }
    ]
  },
  {
    id: 4, label: "Phase 4", title: "CI/CD", month: "Month 4",
    color: "#10B981", accent: "#10B98122", icon: "⚡",
    weeks: [
      {
        week: 14, title: "GitHub Actions Basics",
        topics: ["Workflows, jobs, steps", "YAML syntax for Actions", "Triggers: push, PR, schedule", "Secrets management in GitHub"],
        project: "Write a workflow that runs linting + tests on every push to main.",
        resources: ["docs.github.com/en/actions", "github.com/marketplace?type=actions"],
        linkedin: "\"Week 14: Every push to my repo now automatically runs tests. GitHub Actions is a game changer ⚡\"",
        github: ".github/workflows/ci.yml in an existing project",
      },
      {
        week: 15, title: "CD: Automated Deployment",
        topics: ["Deploy to EC2 on push", "SSH action for remote deploy", "Environment variables", "Staging vs production environments"],
        project: "Auto-deploy your Node API to EC2 when you push to main branch.",
        resources: ["docs.github.com/en/actions/deployment"],
        linkedin: "\"Week 15: Push code → tests run → app deploys to AWS. Fully automated. No manual deploys ever again 🤖\"",
        github: ".github/workflows/deploy.yml",
      },
      {
        week: 16, title: "Docker + CI/CD Integration",
        topics: ["Build & push Docker image in pipeline", "Pull and run new image on server", "Rollback strategies", "Pipeline badges in README"],
        project: "Full pipeline: push code → build Docker image → push to DockerHub → deploy to EC2.",
        resources: ["docs.docker.com/ci-cd/github-actions"],
        linkedin: "\"Week 16: My CI/CD pipeline now builds a Docker image and deploys it in under 3 minutes. Here's the full flow 🔄\"",
        github: "Update existing projects with full CI/CD pipelines",
      },
      {
        week: 17, title: "CI/CD Project Week",
        topics: ["Monorepo pipeline setup", "Matrix builds (test multiple Node versions)", "Caching dependencies in pipelines", "Notifications (Slack/email on failure)"],
        project: "Add CI/CD to 3 of your existing portfolio projects.",
        resources: ["nektos/act (run Actions locally)"],
        linkedin: "\"Week 17: 3 projects now have full CI/CD. Every commit is automatically tested and deployed. My GitHub profile is 🔥\"",
        github: "3 repos with green CI badges in README",
      }
    ]
  },
  {
    id: 5, label: "Phase 5", title: "Terraform (IaC)", month: "Month 5",
    color: "#8B5CF6", accent: "#8B5CF622", icon: "🏗️",
    weeks: [
      {
        week: 18, title: "Terraform Fundamentals",
        topics: ["HCL syntax: resources, variables, outputs", "terraform init, plan, apply, destroy", "AWS provider setup", "State files + remote state (S3)"],
        project: "Provision an EC2 instance using Terraform. Destroy and recreate it.",
        resources: ["developer.hashicorp.com/terraform/tutorials", "registry.terraform.io"],
        linkedin: "\"Week 18: Provisioned an AWS server with 10 lines of code. Infrastructure as Code is the only way 🏗️\"",
        github: "terraform/ec2-basic/",
      },
      {
        week: 19, title: "Terraform: VPC + Security",
        topics: ["Terraform modules", "VPC with subnets, IGW, route tables", "Security groups as code", "Variable files (.tfvars)"],
        project: "Recreate your Week 12 VPC architecture entirely in Terraform.",
        resources: ["github.com/terraform-aws-modules"],
        linkedin: "\"Week 19: My entire AWS network infrastructure is now code. Version controlled. Reproducible. 🔁\"",
        github: "terraform/vpc-module/",
      },
      {
        week: 20, title: "Terraform: Full Stack Infra",
        topics: ["RDS in Terraform", "Load balancer (ALB)", "Auto Scaling Groups", "Outputs + data sources"],
        project: "Provision a production-like setup: ALB → EC2 ASG → RDS — all in Terraform.",
        resources: ["learn.hashicorp.com/tutorials/terraform/aws-asg"],
        linkedin: "\"Week 20: Provisioned a full production infrastructure stack in Terraform. Here's the architecture and code 📐\"",
        github: "terraform/production-stack/",
      },
      {
        week: 21, title: "Terraform + CI/CD",
        topics: ["terraform fmt, validate in pipelines", "Terraform Cloud basics", "Plan on PR, Apply on merge", "Drift detection"],
        project: "Add a GitHub Actions workflow that runs terraform plan on PRs.",
        resources: ["developer.hashicorp.com/terraform/tutorials/automation"],
        linkedin: "\"Week 21: Terraform plans now run automatically on every PR. No more surprise infra changes. 🛡️\"",
        github: ".github/workflows/terraform.yml",
      }
    ]
  },
  {
    id: 6, label: "Phase 6", title: "Kubernetes", month: "Month 6",
    color: "#3B82F6", accent: "#3B82F622", icon: "☸️",
    weeks: [
      {
        week: 22, title: "Kubernetes Concepts",
        topics: ["Pods, Nodes, Clusters", "kubectl basics", "Deployments + ReplicaSets", "Services: ClusterIP, NodePort, LoadBalancer"],
        project: "Run your Node API in a local Kubernetes cluster (minikube or kind).",
        resources: ["kubernetes.io/docs/tutorials", "killercoda.com"],
        linkedin: "\"Week 22: First Kubernetes deployment. Pods, replicas, services — it's starting to make sense ☸️\"",
        github: "kubernetes/node-api-deployment.yaml",
      },
      {
        week: 23, title: "ConfigMaps, Secrets & Volumes",
        topics: ["ConfigMaps for env config", "Secrets for sensitive data", "Persistent Volumes + Claims", "Liveness + Readiness probes"],
        project: "Deploy a stateful app (Postgres) with persistent storage on Kubernetes.",
        resources: ["kubernetes.io/docs/concepts/storage"],
        linkedin: "\"Week 23: Deployed a database on Kubernetes with persistent storage. Data survives pod restarts now ✅\"",
        github: "kubernetes/postgres-stateful/",
      },
      {
        week: 24, title: "Ingress + Helm",
        topics: ["Ingress controllers (nginx)", "TLS termination", "Helm charts: install, upgrade", "Writing a basic Helm chart"],
        project: "Expose your app via Ingress with HTTPS using cert-manager.",
        resources: ["helm.sh/docs", "artifacthub.io"],
        linkedin: "\"Week 24: Apps now accessible via HTTPS through an Ingress controller. The Kubernetes networking puzzle is solved 🧩\"",
        github: "kubernetes/ingress-setup/ + helm/my-app-chart/",
      },
      {
        week: 25, title: "Kubernetes on AWS (EKS)",
        topics: ["EKS cluster setup (eksctl)", "Node groups", "AWS Load Balancer Controller", "IAM roles for service accounts"],
        project: "Deploy your Dockerized app on a real EKS cluster.",
        resources: ["eksctl.io/introduction", "docs.aws.amazon.com/eks"],
        linkedin: "\"Week 25: App running on a managed Kubernetes cluster on AWS EKS. This is production-grade infrastructure 🏆\"",
        github: "kubernetes/eks-deployment/",
      }
    ]
  },
  {
    id: 7, label: "Phase 7", title: "Monitoring", month: "Month 7",
    color: "#F59E0B", accent: "#F59E0B22", icon: "📊",
    weeks: [
      {
        week: 26, title: "Prometheus",
        topics: ["Metrics: counters, gauges, histograms", "prometheus.yml config", "Scraping targets", "PromQL basics"],
        project: "Instrument your Node API with prom-client. Expose /metrics endpoint.",
        resources: ["prometheus.io/docs/introduction/overview"],
        linkedin: "\"Week 26: My app now exposes real-time metrics. Finally know exactly what it's doing in production 📈\"",
        github: "monitoring/prometheus-setup/",
      },
      {
        week: 27, title: "Grafana Dashboards",
        topics: ["Connect Grafana to Prometheus", "Build dashboards: panels, graphs", "Alerting rules", "Pre-built community dashboards"],
        project: "Build a Grafana dashboard: request rate, error rate, latency (RED method).",
        resources: ["grafana.com/tutorials", "grafana.com/grafana/dashboards"],
        linkedin: "\"Week 27: Built my first Grafana dashboard. RED metrics: Rate, Errors, Duration. Here's what it looks like 📊\"",
        github: "monitoring/grafana-dashboard.json",
      },
      {
        week: 28, title: "CloudWatch + Alerting",
        topics: ["CloudWatch metrics + logs", "Log groups + insights queries", "SNS alerts to email/Slack", "Custom metrics from application"],
        project: "Set up CloudWatch alerts: CPU > 80%, 5xx errors, Lambda timeout.",
        resources: ["docs.aws.amazon.com/cloudwatch"],
        linkedin: "\"Week 28: Set up alerts that notify me before things break. Observability is a superpower 🦸\"",
        github: "monitoring/cloudwatch-alerts.tf",
      },
      {
        week: 29, title: "Logging Stack",
        topics: ["Structured logging (JSON)", "Log aggregation with Loki", "Centralized log management", "Correlation IDs for tracing"],
        project: "Add structured logging to your API. Query logs in Grafana Loki.",
        resources: ["grafana.com/oss/loki", "12factor.net/logs"],
        linkedin: "\"Week 29: Every log line is now JSON with a trace ID. Debugging in production is a completely different experience 🔍\"",
        github: "monitoring/loki-logging-setup/",
      }
    ]
  },
  {
    id: 8, label: "Phase 8", title: "Security", month: "Month 8",
    color: "#EF4444", accent: "#EF444422", icon: "🔐",
    weeks: [
      {
        week: 30, title: "IAM Security Deep Dive",
        topics: ["IAM policies: Allow/Deny, conditions", "Roles vs users vs groups", "Service control policies (SCPs)", "AWS Organizations basics"],
        project: "Audit your AWS account: remove root key, enable MFA, review all policies.",
        resources: ["docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"],
        linkedin: "\"Week 30: Audited my AWS account security. Found 3 things that could have been a breach. Here's what to check 🔍\"",
        github: "security/iam-audit-checklist.md",
      },
      {
        week: 31, title: "Secrets Management",
        topics: ["AWS Secrets Manager", "Parameter Store (SSM)", "Never hardcode credentials", "Secret rotation"],
        project: "Move all hardcoded secrets in your apps to AWS Secrets Manager.",
        resources: ["docs.aws.amazon.com/secretsmanager"],
        linkedin: "\"Week 31: Removed every hardcoded secret from my code. All apps now pull secrets from AWS at runtime 🔑\"",
        github: "security/secrets-migration-notes.md",
      },
      {
        week: 32, title: "Encryption + HTTPS",
        topics: ["TLS/SSL certificates (ACM)", "Encryption at rest vs in transit", "KMS key management", "HTTPS everywhere"],
        project: "Enable HTTPS on all your deployed apps using ACM certificates.",
        resources: ["docs.aws.amazon.com/acm", "letsencrypt.org"],
        linkedin: "\"Week 32: Every app I deploy now has HTTPS by default. Here's the automated certificate setup 🔒\"",
        github: "security/https-setup.md",
      },
      {
        week: 33, title: "Security Scanning",
        topics: ["Trivy: container vulnerability scanning", "tfsec: Terraform security", "AWS Security Hub basics", "OWASP Top 10 awareness"],
        project: "Add Trivy to your CI/CD pipeline. Block deploys if critical vulns found.",
        resources: ["aquasecurity.github.io/trivy", "aquasecurity.github.io/tfsec"],
        linkedin: "\"Week 33: Added security scanning to my pipeline. Ships blocked if critical vulnerabilities detected. Security first 🛡️\"",
        github: ".github/workflows/security-scan.yml",
      }
    ]
  },
  {
    id: 9, label: "Phase 9", title: "Portfolio Projects", month: "Months 9–10",
    color: "#EC4899", accent: "#EC489922", icon: "🚀",
    weeks: [
      {
        week: 34, title: "Project: Portfolio on AWS",
        topics: ["S3 static hosting", "CloudFront CDN", "Route 53 domain", "CI/CD from GitHub"],
        project: "Full portfolio site: custom domain, HTTPS, auto-deploy on every push.",
        resources: ["Your Week 11 + 15 notes"],
        linkedin: "\"Portfolio project 1/10: My developer portfolio is live with a custom domain, CDN, and auto-deploys. Link in comments 🌐\"",
        github: "portfolio-website/ — your flagship public project",
      },
      {
        week: 35, title: "Project: URL Shortener",
        topics: ["Lambda + API Gateway", "DynamoDB for URL storage", "Custom domain for API", "Rate limiting"],
        project: "Serverless URL shortener. Fully deployed. Share the link publicly.",
        resources: ["Your Week 13 notes"],
        linkedin: "\"Project 2/10: Built a serverless URL shortener. No servers. Scales infinitely. Costs ~$0/month. Architecture breakdown 👇\"",
        github: "url-shortener/ with full README + architecture diagram",
      },
      {
        week: 36, title: "Project: CI/CD Pipeline Showcase",
        topics: ["End-to-end pipeline", "Test → Build → Deploy", "Slack notifications", "Rollback workflow"],
        project: "A repo whose entire purpose is demonstrating a production-grade CI/CD pipeline.",
        resources: ["Your Weeks 14–17 notes"],
        linkedin: "\"Project 3/10: A full CI/CD pipeline — tests, Docker build, AWS deploy, Slack alert. The code is open source 🔄\"",
        github: "cicd-pipeline-demo/ with annotated workflow files",
      },
      {
        week: 37, title: "Project: Terraform AWS Stack",
        topics: ["VPC + EC2 + RDS + ALB", "Remote state in S3", "Modules for reusability", "Full documentation"],
        project: "One Terraform project that provisions a complete production AWS environment.",
        resources: ["Your Weeks 18–21 notes"],
        linkedin: "\"Project 4/10: My entire AWS infrastructure in code. One terraform apply builds everything. Open source 🏗️\"",
        github: "terraform-aws-stack/ — highly starred if shared publicly",
      },
      {
        week: 38, title: "Project: Kubernetes Deployment",
        topics: ["Helm chart for your app", "EKS deployment", "Horizontal Pod Autoscaler", "Full monitoring stack"],
        project: "Deploy a scalable app on EKS with auto-scaling and a Grafana dashboard.",
        resources: ["Your Weeks 22–25 notes"],
        linkedin: "\"Project 5/10: App deployed on Kubernetes — scales automatically under load. Grafana dashboard shows it in real time 📊\"",
        github: "kubernetes-app/ with Helm charts + dashboard JSON",
      },
      {
        week: 39, title: "Project: Monitoring Dashboard",
        topics: ["Prometheus + Grafana + Loki", "Full observability stack", "Alerting to Slack", "PUBLIC dashboard link"],
        project: "A public Grafana dashboard for one of your apps. Share the link.",
        resources: ["Your Weeks 26–29 notes"],
        linkedin: "\"Project 6/10: Real-time monitoring dashboard. Anyone can see my app's metrics live. Link 👇 📈\"",
        github: "monitoring-stack/ with docker-compose and dashboard configs",
      },
      {
        week: 40, title: "Capstone: Cloud-Native App",
        topics: ["Full stack app", "Docker + Kubernetes + Terraform", "CI/CD end-to-end", "Monitoring + security"],
        project: "CAPSTONE: A complete cloud-native application using every skill from the roadmap.",
        resources: ["All previous notes"],
        linkedin: "\"Project 10/10: The capstone. Full cloud-native app — Docker, K8s, Terraform, CI/CD, monitoring, HTTPS. Breakdown 🧵\"",
        github: "cloud-native-capstone/ — pin this to your profile",
      }
    ]
  },
  {
    id: 10, label: "Phase 10", title: "Certifications + Jobs", month: "Months 11–12",
    color: "#84CC16", accent: "#84CC1622", icon: "🎯",
    weeks: [
      {
        week: 41, title: "AWS Cloud Practitioner Prep",
        topics: ["Cloud concepts, pricing models", "Core AWS services overview", "Security basics", "Practice exams"],
        project: "Score 80%+ on 3 practice exams before booking the real one.",
        resources: ["stephane-maarek.com (Udemy)", "awsacademy.instructure.com", "examtopics.com/exams/amazon/clf-c02"],
        linkedin: "\"Prepping for AWS Cloud Practitioner. Scored 82% on my first practice exam. Exam booked for next week 📚\"",
        github: "certifications/ccp-study-notes.md",
      },
      {
        week: 42, title: "AWS Solutions Architect Prep",
        topics: ["Well-Architected Framework", "Advanced VPC, EC2, RDS", "High availability patterns", "Cost optimization"],
        project: "Design a 3-tier architecture diagram for a hypothetical startup.",
        resources: ["Stephane Maarek SAA-C03 course", "awsgeek.com"],
        linkedin: "\"Studying for AWS Solutions Architect. The Well-Architected Framework changed how I think about system design 🏛️\"",
        github: "certifications/saa-architecture-designs/",
      },
      {
        week: 44, title: "Job Application Sprint",
        topics: ["Update CV with every project", "Craft your DevOps story", "LinkedIn optimization", "Target: remote-friendly companies"],
        project: "Apply to 5 companies per week. Track everything in a spreadsheet.",
        resources: ["levels.fyi (salaries)", "remoteok.com", "weworkremotely.com", "linkedin.com/jobs"],
        linkedin: "\"After 12 months of consistent learning, I'm now open to Cloud / DevOps roles. Here's everything I built 🧵\"",
        github: "Profile README updated with portfolio showcase",
      },
      {
        week: 48, title: "AI + MLOps Specialization Begins",
        topics: ["Python for DevOps", "ML model deployment patterns", "MLflow, BentoML basics", "LLM API integration (your strength!)"],
        project: "Deploy a simple ML model as a REST API using Docker + FastAPI on AWS.",
        resources: ["mlflow.org", "bentoml.com", "fastapi.tiangolo.com"],
        linkedin: "\"Unlocked final form: Cloud DevOps + AI Engineering. Deploying ML models to production is just DevOps with better vibes 🤖☁️\"",
        github: "mlops/model-serving-fastapi/",
      }
    ]
  }
];

export const allWeeks = PHASES.flatMap(p => p.weeks.map(w => ({ ...w, phase: p })));
export const totalWeeks = allWeeks.length;
